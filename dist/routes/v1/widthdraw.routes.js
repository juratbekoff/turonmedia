"use strict";
exports.__esModule = true;
var express_1 = require("express");
var widthdraw_1 = require("../../controllers/widthdraw");
var router = (0, express_1.Router)();
router
    .post('/request', widthdraw_1.requestWidthdraw)
    .post('/payment/success/:widthdrawId', widthdraw_1.makePaymentSuccess)
    .post('/payment/cancel/:widthdrawId', widthdraw_1.makePaymentCancelled)
    .get('/lists', widthdraw_1.getAllWidthdrawRequests)
    .get('/lists/:adminId', widthdraw_1.adminWidthdrawRequests);
exports["default"] = router;
//# sourceMappingURL=widthdraw.routes.js.map