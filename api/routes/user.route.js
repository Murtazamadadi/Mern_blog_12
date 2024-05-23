import express from "express"
import {testApi} from "../controllers/user.controller.js"
const route=express.Router()

route.get("/test",testApi)

export default route