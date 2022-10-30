"use strict";
exports.__esModule = true;
var express_1 = require("express");
var news_1 = require("../../controllers/news");
var schemas_1 = require("./../../schemas");
var express_validius_1 = require("@verve-neowise/express-validius");
var router = (0, express_1.Router)();
router
    .post('/', (0, express_validius_1.body)(schemas_1.newsSchema), news_1.creatingNews)
    .get('/', news_1.getAllNews);
exports["default"] = router;
//# sourceMappingURL=news.routes.js.map