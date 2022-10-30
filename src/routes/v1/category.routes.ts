import { Router } from "express";
import { createCategory } from "../../controllers/category"
import { body } from "@verve-neowise/express-validius"
import { categorySchema } from "../../schemas";

const router = Router()

router
    .post('/', body(categorySchema), createCategory)

export default router