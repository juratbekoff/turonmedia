import { Router } from "express";
import {  creatingNews, getAllNews } from "../../controllers/news"
import { newsSchema } from "./../../schemas"
import {body} from "@verve-neowise/express-validius"

const router = Router()

router
    .post('/', body(newsSchema), creatingNews)
    .get('/', getAllNews)

export default router
