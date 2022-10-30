import { Router } from "express";
import { createView,createStreamedView } from "../../controllers/views"

const router = Router()

router
    .get('/common/:newsId', createView)
    .get('/streamed', createStreamedView)


    // tests

export default router