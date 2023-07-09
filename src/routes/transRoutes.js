import { Router } from "express";
import { validateSchema } from "../middlewares/validadeSchema.js";
import { transactionreg, transactionget } from "../controllers/transController.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { schemastransaction } from "../schemas/transschema.js";



const transRouter = Router()


transRouter.post("/nova-transacao/:id", validateAuth, validateSchema(schemastransaction), transactionreg);
transRouter.get("/home", validateAuth, transactionget);


export default transRouter