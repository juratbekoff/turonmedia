"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./routes/router"));
var index_1 = require("./configs/index");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
app.use('/api', router_1["default"]);
try {
    app.listen(index_1.serverConfig.port, function () {
        console.log("Server running on http://localhost:".concat(index_1.serverConfig.port));
    });
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=server.js.map