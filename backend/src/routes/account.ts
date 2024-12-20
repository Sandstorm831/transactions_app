import express, {Request, Response} from 'express';
import { authMiddleware } from '../middleware';
import { PrismaClient } from '@prisma/client';
import { transferSchema } from '../zodSchema';
const router = express.Router();
const prisma = new PrismaClient({log: ['query', 'info']});



router.get('/balance', authMiddleware, async (req: Request, res: Response) => {
    const balance = await prisma.accounts.findUnique({
        where:{
            userId: req.userId,
        },
        select: {
            balance: true,
        },
    })
    res.status(200).json({
        balance: balance?.balance,
    })
    return; 
})

router.post('/transfer', authMiddleware, async (req: Request, res: Response)=>{
    const fromUser = req.userId;
    if(fromUser === undefined) {
        res.json(400).json({
            msg: "wrong root User id",
        });
        return;
    }
    const bodyObject = transferSchema.safeParse(req.body);
    if(!bodyObject.success){
        res.status(400).json({
            msg: "Invalid arguments"
        })
    }

    try{
        await prisma.$transaction(async(tx) => {
            const usersExist = await tx.user.findMany({
                where: {
                    OR : [
                        { id: bodyObject.data?.to},
                        { id: fromUser},
                    ]
                },
            });
            if(usersExist.length !== 2){
                throw new Error(`USERS NOT FOUND`);
            }
            const updateSource = await tx.accounts.update({
                data: {
                    balance: {
                        decrement: bodyObject.data?.amount,
                    }
                },
                where:{
                    userId: fromUser,
                }
            })
            if(updateSource.balance < 0){
                throw new Error(`NOT ENOUGH BALANCE`);
            }
            await tx.accounts.update({
                data: {
                    balance: {
                        increment: bodyObject.data?.amount,
                    },
                },
                where: {
                    userId: bodyObject.data?.to ,
                },
            })

        })
    } catch(err){
        if( err instanceof Error && err.message === `USERS NOT FOUND`){
            res.status(400).json({
                mesg: `error with finding users`,
            })
            return;
        }
        else if(err instanceof Error && err.message === `NOT ENOUGH BALANCE`){
            res.status(400).json({
                msg: `User ${fromUser} doesn't have enough balance to send ${bodyObject.data?.amount}`,
            })
            return;
        }
        else {
            res.status(400).json({
                msg: 'Some unknow Error occcured',
                error: String(err)
            })
            return;
        }
    }
    res.status(200).json({
        msg: "Transaction Completed",
    });
})

export {router as accountRouter};