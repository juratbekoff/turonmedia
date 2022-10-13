import { Router } from "express";
import { creatingCeo } from "../../controllers/ceo/index"
import {body} from "@verve-neowise/express-validius"
import { ceoSchema } from "../../schemas";

const router = Router()

// createCeo
router.post('/auth', body(ceoSchema), creatingCeo)


export default router