import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js"

export const create=async(req,res,next)=>{
    
    if(!req.user.isadmin){
        return next(errorHandler(403,"شمااجازه ساختن پست را ندارید"))
    }

    if(!req.body.title || !req.body.content){
        return next(errorHandler(400,"وارید کردن اطلاعات الزامی می باشد"))
    }

    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');

    const newPost=await Post({
        ...req.body,
        slug,
        userId:req.user.id
    })


    try{
        const savedPost=await newPost.save()
        res.status(200).json(savedPost)
    }catch(error){
        next(error)
    }
}