import { Router } from "express";
import {dashbaord} from "./../../controllers/dashboard/"

const router = Router()

router
    .get('/', dashbaord)

export default router