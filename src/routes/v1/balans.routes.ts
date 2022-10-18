import { Router } from "express";
import { getAdminBalans, getBalansByStreams} from "../../controllers/balans"

const router = Router()

router
    .get('/admin/:adminId', getAdminBalans)
    .get('/admin/streams/:adminId', getBalansByStreams )
    
export default router