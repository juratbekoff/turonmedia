"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res, next) {
    console.log(">>> [".concat(req.method, "] ").concat(req.originalUrl, " -> "));
    if (Object.keys(req.params).length > 0) {
        console.log('\tPARAMS: ' + JSON.stringify(req.params));
    }
    if (Object.keys(req.query).length > 0) {
        console.log('\tQUERY: ' + JSON.stringify(req.query));
    }
    if (Object.keys(req.body).length > 0) {
        console.log('\tBODY: ' + JSON.stringify(req.body));
    }
    next();
});
//# sourceMappingURL=request-logger.js.map