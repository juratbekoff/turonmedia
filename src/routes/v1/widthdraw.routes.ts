import { Router } from "express";
import { requestWidthdraw, adminWidthdrawRequests, getAllWidthdrawRequests, makePaymentSuccess, makePaymentCancelled } from "../../controllers/widthdraw"

const router = Router()

router
    .post('/request', requestWidthdraw)
    .post('/payment/success/:widthdrawId', makePaymentSuccess)
    .post('/payment/cancel/:widthdrawId', makePaymentCancelled)

    .get('/lists', getAllWidthdrawRequests)
    .get('/lists/:adminId', adminWidthdrawRequests)
    
export default router
