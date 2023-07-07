import { Router } from "express";
import { signin, signup } from '../controllers/userController.js';
import { validateSchema } from "../middlewares/validadeSchema.js";
import { schemasignin, schemasignup } from "../schemas/userschemas.js";


const userRouter = Router()


userRouter.post("/sign-up", validateSchema(schemasignup), signup);
userRouter.post("/sign-in", validateSchema(schemasignin), signin);

export default userRouter