"use strict";
exports.__esModule = true;
exports.categorySchema = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.categorySchema = (0, validius_1.schema)((0, validius_1.object)({
    required: true,
    entries: {
        name: (0, validius_1.string)({
            required: true,
            min: 3,
            max: 50
        })
    }
}));
//# sourceMappingURL=category.schema.js.map