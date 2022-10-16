"use strict";
exports.__esModule = true;
exports.adminSchema = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.adminSchema = (0, validius_1.schema)((0, validius_1.object)({
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
//# sourceMappingURL=admin.schema.js.map