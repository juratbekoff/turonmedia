"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.jwtConfig = exports.serverConfig = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var server_config_1 = require("./server.config");
__createBinding(exports, server_config_1, "default", "serverConfig");
var jwt_config_1 = require("./jwt.config");
__createBinding(exports, jwt_config_1, "default", "jwtConfig");
//# sourceMappingURL=index.js.map