import { Router } from "express";
import {adminRegister } from "../../controllers/admin"
import {body} from "@verve-neowise/express-validius"
import { adminSchema} from "../../schemas";

const router = Router()

router
    .post('/register', body(adminSchema), adminRegister)

export default router