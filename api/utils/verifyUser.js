import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken= async (req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(errorHandler(404,"شما تبت نام نکرده اید"))
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(errorHandler(404,"شما ثبت نام نشده اید"))
        }
        req.user=user
        next()
    })

}