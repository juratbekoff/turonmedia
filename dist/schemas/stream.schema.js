"use strict";
exports.__esModule = true;
exports.streamSchema = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.streamSchema = (0, validius_1.schema)((0, validius_1.object)({
    required: true,
    entries: {
        name: (0, validius_1.string)({
            required: false,
            min: 5,
            max: 50
        }),
        adminId: (0, validius_1.number)({
            required: true
        }),
        newsId: (0, validius_1.number)({
            required: true
        })
    }
}));
//# sourceMappingURL=stream.schema.js.map