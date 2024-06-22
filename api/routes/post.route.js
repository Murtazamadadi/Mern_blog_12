import express from "express"
import { create, deletepost, getPosts } from "../controllers/post.controller.js"
import { verifyToken } from "../utils/verifyUser.js"

const route=express.Router()

route.post("/create-post",verifyToken,create)
route.get("/get-posts",getPosts)
route.delete("/delete/:postId/:userId",verifyToken,deletepost)


export default route