import { Router } from "express";
import {adminRegister, getAdmin, getAllAdmns } from "../../controllers/admin"
import {body} from "@verve-neowise/express-validius"
import { adminSchema} from "../../schemas";

const router = Router()

router
    .post('/register', body(adminSchema), adminRegister)
    .get('/:adminId', getAdmin)
    .get('/', getAllAdmns)

export default router