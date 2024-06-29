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


// =================================================== getPost comments
export const getPostComments=async(req,res,next)=>{

    try{
        const comments=await Comment.find({postId:req.params.postId}).sort({
            createdAt:-1,
        })

        res.status(200).json(comments)
    }catch(error){
        next(error)
    }
}


// ==================================================== Like Comment 
export const LikeComment=async(req,res,next)=>{
 try{
    const comment=await Comment.findbyId(req.params.commentId)

    if(!comment){
        return next(errorHandler(404,"کامنت پیدا نشد"))
    }

    const userIndex=comment.likes.indexOf(req.user.id)
    if(userIndex === -1){
        comment.nuberOfLikes+=1
        comment.push(req.user.id)
    }else{
        comment.nuberOfLikes-=1
        comment.splice(userIndex,1)
    }

    await comment.save()
    res.status(200).json(comment)
 }catch(errro){
    next(errro)
 } 
}