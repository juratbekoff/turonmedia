"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var views_routes_1 = __importDefault(require("./views.routes"));
var ceo_routes_1 = __importDefault(require("./ceo.routes"));
var news_routes_1 = __importDefault(require("./news.routes"));
var admin_routes_1 = __importDefault(require("./admin.routes"));
var stream_routes_1 = __importDefault(require("./stream.routes"));
var balans_routes_1 = __importDefault(require("./balans.routes"));
var widthdraw_routes_1 = __importDefault(require("./widthdraw.routes"));
var dashboard_routes_1 = __importDefault(require("./dashboard.routes"));
var router = (0, express_1["default"])();
router.use(express_1["default"].json());
router.use(express_1["default"].urlencoded({ extended: true }));
router.use((0, cors_1["default"])());
router.use('/view', views_routes_1["default"]);
router.use('/ceo', ceo_routes_1["default"]);
router.use('/admin', admin_routes_1["default"]);
router.use('/news', news_routes_1["default"]);
router.use('/stream', stream_routes_1["default"]);
router.use('/balans', balans_routes_1["default"]);
router.use('/widthdraw', widthdraw_routes_1["default"]);
router.use('/dashboard', dashboard_routes_1["default"]);
exports["default"] = router;
//# sourceMappingURL=index.js.map