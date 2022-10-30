import { Router } from "express";
import { getAdminBalans, getBalansByStreams, totalAdminsWidthdraws} from "../../controllers/balans"

const router = Router()

router
    .get('/admin/:adminId', getAdminBalans)
    .get('/admin/streams/:adminId', getBalansByStreams )
    .get('/admin/info/:adminId', totalAdminsWidthdraws )

export default router