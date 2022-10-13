"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var v1_1 = __importDefault(require("./v1"));
var router = (0, express_1["default"])();
router.use(express_1["default"].json());
router.use(express_1["default"].urlencoded({ extended: true }));
router.use((0, cors_1["default"])());
router.use('/v1', v1_1["default"]);
exports["default"] = router;
//# sourceMappingURL=router.js.map