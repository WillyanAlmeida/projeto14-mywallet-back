import { Router } from "express";
import userRouter from "./userRoutes.js";
import transRouter from "./transRoutes.js";

const router = Router()

router.use(userRouter)
router.use(transRouter)

export default router;