import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import { partialUser, User, userSignIn } from '../zodSchema';
import jwt from 'jsonwebtoken';
import aivenConfig from '../config';
import { authMiddleware } from '../middleware';
const router = express.Router();
const prisma = new PrismaClient({log: ['query', 'info']});

interface UpdateObject {
    name?: string,
    password?: string,
}

type bulkReqQuery = {
    filter: string;
}

router.post('/signup', async (req: Request, res: Response) => {
    const body = req.body;
    const bodyObject = User.safeParse(body);
    if(!bodyObject.success){
        res.status(400).json({
            msg: "Wrong input format",
        });
        return;
    }
    const emailObject = bodyObject.data.email;
    const uniqueCheck = await prisma.user.findUnique({
        where: {
            email: emailObject,
        }
    })
    if(uniqueCheck){
        res.status(409).json({
            msg: "User already exists",
        })
        return;
    }
    const addUserRes = await prisma.user.create({
        data: bodyObject.data,
    })

    // Initialize the initial balance by a random number between 1-10000 --------
    const accDetails = await prisma.accounts.create({
        data: {
            userId: addUserRes.id,
            balance: Math.random()*10000 + 1,
        }
    })
    // ----------------------
    
    const jwToken = jwt.sign({userId: addUserRes.id}, aivenConfig.JWT_SECRET);
    res.status(200).json({
        msg: `User ${addUserRes.email} is created successfully`,
        name: addUserRes.name,
        balance: accDetails.balance,
        jwt: `Bearer ${jwToken}`,
    })
    return;
})


router.post('/signin', async (req, res) => {
    const body = req.body;
    const bodyObject = userSignIn.safeParse(body);
    if(!bodyObject.success){
        res.status(400).json({
            msg: "Wrong Input format",
        })
        return;
    }
    const uniqueCheck = await prisma.user.findUnique({
        where: {
            email: bodyObject.data.email,
        }
    });
    if(!uniqueCheck){
        res.status(401).json({
            msg: "Invalid Credentials",
        })
        return;
    }
    const jwToken = jwt.sign({userId: uniqueCheck.id}, aivenConfig.JWT_SECRET);
    res.status(200).json({
        token: `Bearer ${jwToken}`,
    })
    return;

})

router.put('/', authMiddleware, async (req: Request, res: Response) => {
    const body = req.body;
    const bodyObject = partialUser.safeParse(body);
    if(!bodyObject.success){
        res.status(400).json({
            msg: "Invalid arguments",
        })
        return;
    }
    const keys = Object.keys(body);
    const dataObj : UpdateObject= {};
    for(let i=0; i<keys.length; i++){
        if(keys[i] === 'name'){
            dataObj["name"] = body.name;
        }
        else if(keys[i] === 'password'){
            dataObj['password'] = body.password;
        }
    }
    const updateUserRed = await prisma.user.update({
        where: {
            id: req.userId,
        },
        data: dataObj,
    })
    res.status(200).json({
        msg: "Updated Successfully",
    })
    return;
})

router.get('/bulk', authMiddleware, async (req: Request<{}, any, {}, bulkReqQuery>, res: Response) => {
    const qry: string = req.query.filter;
    const bulkQueryUpdate = await prisma.user.findMany({
        take: 10,
        where: {
            name: {
                contains: qry,
            },
        },
        select: {
            id: true,
            name: true,
            email: true,
        }
    })
    res.status(200).json({
        users: bulkQueryUpdate,
    })
    return;
})

export {router as userRouter}