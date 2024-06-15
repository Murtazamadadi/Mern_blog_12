import express from "express"
import { create } from "../controllers/post.controller.js"
import { verifyToken } from "../utils/verifyUser.js"

const route=express.Router()

route.post("/create-post",verifyToken,create)


export default route