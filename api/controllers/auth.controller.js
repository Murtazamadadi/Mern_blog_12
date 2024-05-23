import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"


export const signUp= async(req,res,next)=>{
    const {username,email,password}=req.body

    if(!username || !email || !password || username==="" || email==="" || password===""){
        // res.json("وارید کردن تمام اطلاعات الزامی می باشد")
        next(errorHandler(400,"وارید کردن همه اطلاعات الزامی می باشد"))
    }

    const hashpassword=bcryptjs.hashSync(password,10)

    const newUser=await User({
        username,
        email,
        password:hashpassword,
    })

    try{
        await newUser.save()
        res.status(200).json(newUser)
    }catch(err){
        // res.status(400).json(err.message)
        next(err)
    }
}