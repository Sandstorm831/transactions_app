import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import aivenConfig from "./config";

const authMiddleware = (req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(403).json({});
    }
    const jwtoken = authHeader?.split(" ")[1];
    if (jwtoken === undefined) {
        res.status(403).json({})
    }
    const authJWT = jwtoken as string;
    try {
        const verification = jwt.verify(authJWT, aivenConfig.JWT_SECRET);
        if(typeof(verification) === 'string' ){
            res.status(403).json({});
            return;
        }
        else if(verification?.userId === undefined){
            res.status(403).json({});
        }
        req.userId = verification.userId;
        next();
    } catch(err){
        res.status(403).json({});
    }
}

export {authMiddleware};