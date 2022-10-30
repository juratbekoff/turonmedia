"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_1 = require("../../controllers/user");
var router = (0, express_1.Router)();
router
    .get('/:id', user_1.createView);
exports["default"] = router;
//# sourceMappingURL=client.routes.js.map