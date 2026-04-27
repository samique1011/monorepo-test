import {userSchema} from "@repo/schemas/userSchema"
import { NextFunction , Request , Response } from "express";

export default function inputSanitation(req : Request , res : Response , next : NextFunction){
    const Response = userSchema.safeParse(req.body);
    if(Response.success){
        next();
    }
    else{
        res.status(403).json({
            msg : "Wrong body"
        })
    }
}