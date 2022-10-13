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
exports.__esModule = true;
exports.requestLogger = exports.errorHandler = void 0;
var error_handler_1 = require("./error-handler");
__createBinding(exports, error_handler_1, "default", "errorHandler");
var request_logger_1 = require("./request-logger");
__createBinding(exports, request_logger_1, "default", "requestLogger");
//# sourceMappingURL=index.js.map