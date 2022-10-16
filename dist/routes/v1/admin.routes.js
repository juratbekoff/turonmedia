"use strict";
exports.__esModule = true;
var express_1 = require("express");
var admin_1 = require("../../controllers/admin");
var express_validius_1 = require("@verve-neowise/express-validius");
var schemas_1 = require("../../schemas");
var router = (0, express_1.Router)();
router
    .post('/register', (0, express_validius_1.body)(schemas_1.adminSchema), admin_1.adminRegister);
exports["default"] = router;
//# sourceMappingURL=admin.routes.js.map