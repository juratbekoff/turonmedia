import { Router } from "express";
import { createStream, getStreamById, getAllStreams, getStreamsStat } from "../../controllers/streams"
import {body} from "@verve-neowise/express-validius"
import { streamSchema } from "../../schemas";

const router = Router()

router
    .post('/', body(streamSchema), createStream)
    .get('/:adminId', getStreamsStat)
    .get('/', getAllStreams)
    
export default router