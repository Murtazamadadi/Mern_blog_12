import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from "bcryptjs"

export const testApi=(req,res)=>{
    console.log("test api is working")
    res.json({
        message:"test api is working"
    })
}


export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to update this user'));
    }
    if (req.body.password) {
      if (req.body.password.length < 6) {
        return next(errorHandler(400, 'Password must be at least 6 characters'));
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
      if (req.body.username.length < 7 || req.body.username.length > 20) {
        return next(
          errorHandler(400, 'Username must be between 7 and 20 characters')
        );
      }
      if (req.body.username.includes(' ')) {
        return next(errorHandler(400, 'Username cannot contain spaces'));
      }
      if (req.body.username !== req.body.username.toLowerCase()) {
        return next(errorHandler(400, 'Username must be lowercase'));
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, 'Username can only contain letters and numbers')
        );
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profileImage: req.body.profileImage,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };


  // ====================================================== delete user


export const deleteUser=async(req,res,next)=>{
  if(req.user.id !== req.params.Id){
    return next(errorHandler(404,"شمااجازه حذف این اکوانت را ندارید"))
  }

  try{
    await User.findByIdAndDelete(req.params.Id)
    res.status(200).json("کاربر موفقانه حذف شد")
  }catch(error){
    next(error)
  }
}

// ============================================================ sign out 

export const signout=async(req,res,next)=>{
  try{
    res.clearCookie("access_token").status(200).json("کاربرموفقانه خارج شدد")
  }catch(error){
    next(error)
  }
}