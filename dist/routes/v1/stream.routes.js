"use strict";
exports.__esModule = true;
var express_1 = require("express");
var streams_1 = require("../../controllers/streams");
var express_validius_1 = require("@verve-neowise/express-validius");
var schemas_1 = require("../../schemas");
var router = (0, express_1.Router)();
router
    .post('/', (0, express_validius_1.body)(schemas_1.streamSchema), streams_1.createStream)
    .get('/:adminId', streams_1.getStreamsStat)
    .get('/', streams_1.getAllStreams);
exports["default"] = router;
//# sourceMappingURL=stream.routes.js.map