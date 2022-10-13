"use strict";
exports.__esModule = true;
exports["default"] = (function (error, req, res, next) {
    console.log("[ERROR] ".concat(req.method, " ").concat(req.originalUrl, " -> ").concat(error.message));
    res.status(500).send({
        message: 'Internal Server Error: ' + error.message
    });
});
//# sourceMappingURL=error-handler.js.map