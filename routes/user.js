import { Router } from "express";
import { userController} from '../dependencies/dependencies.js'
import { authenticate } from "../middlewares/auth.js";
export const userRouter = Router()

userRouter.post('/', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.patch('/changepassword',authenticate(), userController.changepassword)


