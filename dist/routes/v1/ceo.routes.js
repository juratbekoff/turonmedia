"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_1 = require("../../controllers/ceo/index");
var express_validius_1 = require("@verve-neowise/express-validius");
var schemas_1 = require("../../schemas");
var router = (0, express_1.Router)();
router
    .post('/auth', (0, express_validius_1.body)(schemas_1.ceoSchema), index_1.creatingCeo);
exports["default"] = router;
//# sourceMappingURL=ceo.routes.js.map