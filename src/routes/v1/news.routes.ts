import { Router } from "express";
import {  creatingNews, getAllNews } from "../../controllers/news"

const router = Router()

router
    .post('/', creatingNews)
    .get('/', getAllNews)

export default router
