"use strict";
exports.__esModule = true;
var express_1 = require("express");
var news_1 = require("../../controllers/news");
var router = (0, express_1.Router)();
router
    .post('/', news_1.creatingNews)
    .get('/', news_1.getAllNews);
exports["default"] = router;
//# sourceMappingURL=news.routes.js.map