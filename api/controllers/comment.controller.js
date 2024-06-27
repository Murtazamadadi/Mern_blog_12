import { errorHandler } from "../utils/error.js"
import Comment from "../models/comment.model.js"


export const CreateComment=async (req,res,next)=>{

    const {content,postId,userId}=req.body

    if(userId !== req.user.id){
        return next(errorHandler(403,"شما اجازه کامنت کردن را ندارید"))
    }

    try{
        const createdComment=await Comment({
            content,
            postId,
            userId
        })

        await createdComment.save()

        res.status(200).json(createdComment)
    }catch(error){
        next(error)
    }
}