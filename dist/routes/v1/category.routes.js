"use strict";
exports.__esModule = true;
var express_1 = require("express");
var category_1 = require("../../controllers/category");
var express_validius_1 = require("@verve-neowise/express-validius");
var schemas_1 = require("../../schemas");
var router = (0, express_1.Router)();
router
    .post('/', (0, express_validius_1.body)(schemas_1.categorySchema), category_1.createCategory);
exports["default"] = router;
//# sourceMappingURL=category.routes.js.map