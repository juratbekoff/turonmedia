"use strict";
exports.__esModule = true;
exports.ceoSchema = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.ceoSchema = (0, validius_1.schema)((0, validius_1.object)({
    required: true,
    entries: {
        name: (0, validius_1.string)({
            required: false,
            min: 5,
            max: 50
        }),
        username: (0, validius_1.string)({
            required: true,
            min: 3,
            max: 12
        }),
        password: (0, validius_1.string)({
            required: true,
            min: 3,
            max: 12
        })
    }
}));
//# sourceMappingURL=ceo.schema.js.map