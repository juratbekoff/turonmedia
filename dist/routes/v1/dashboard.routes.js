"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dashboard_1 = require("./../../controllers/dashboard/");
var router = (0, express_1.Router)();
router
    .get('/', dashboard_1.dashbaord);
exports["default"] = router;
//# sourceMappingURL=dashboard.routes.js.map