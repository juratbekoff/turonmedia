"use strict";
exports.__esModule = true;
var express_1 = require("express");
var balans_1 = require("../../controllers/balans");
var router = (0, express_1.Router)();
router
    .get('/admin/:adminId', balans_1.getAdminBalans)
    .get('/admin/streams/:adminId', balans_1.getBalansByStreams);
exports["default"] = router;
//# sourceMappingURL=balans.routes.js.map