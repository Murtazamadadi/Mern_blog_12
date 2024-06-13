import express from "express"
import {testApi} from "../controllers/user.controller.js"
import { verifyToken } from "../utils/verifyUser.js"
import { updateUser } from "../controllers/user.controller.js"
const route=express.Router()

// route.get("/test",testApi)
route.put("/update/:userId",verifyToken,updateUser)

export default route