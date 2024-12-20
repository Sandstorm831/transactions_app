import express from 'express';
import { PrismaClient } from '@prisma/client';
import { User, userSignIn } from '../zodSchema';
import jwt from 'jsonwebtoken';
import aivenConfig from '../config';
const router = express.Router();
const prisma = new PrismaClient({log: ['query', 'info']});

router.post('/signup', async (req, res)=> {
    const body = req.body;
    const bodyObject = User.safeParse(body);
    if(!bodyObject.success){
        res.status(400).json({
            msg: "Wrong input format"
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
    }
    const addUserRes = await prisma.user.create({
        data: bodyObject.data,
    })
    const jwToken = jwt.sign({userId: addUserRes.id}, aivenConfig.JWT_SECRET);
    res.status(200).json({
        msg: `User ${addUserRes.email} is created successfully`,
        jst: jwToken,
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
        token: jwToken,
    })
    return;

})

export {router as userRouter}