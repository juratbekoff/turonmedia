"use strict";
exports.__esModule = true;
exports.newsSchema = void 0;
var validius_1 = require("@verve-neowise/validius");
exports.newsSchema = (0, validius_1.schema)((0, validius_1.object)({
    required: true,
    entries: {
        title: (0, validius_1.string)({
            required: true,
            min: 5,
            max: 300
        }),
        descr: (0, validius_1.string)({
            required: true,
            min: 10
        }),
        image: (0, validius_1.string)({
            required: false
        }),
        preview: (0, validius_1.string)({
            required: true
        }),
        video: (0, validius_1.string)({
            required: false
        }),
        categoryId: (0, validius_1.number)({
            required: true
        })
    }
}));
//# sourceMappingURL=news.schema.js.map