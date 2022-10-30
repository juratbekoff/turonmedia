"use strict";
exports.__esModule = true;
var express_1 = require("express");
var views_1 = require("../../controllers/views");
var router = (0, express_1.Router)();
router
    .get('/common/:newsId', views_1.createView)
    .get('/streamed', views_1.createStreamedView);
// tests
exports["default"] = router;
//# sourceMappingURL=views.routes.js.map