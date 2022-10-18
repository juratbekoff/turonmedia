"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.createStreamedView = void 0;
var services_1 = require("../../services");
var newsService = new services_1.ViewService();
var balansService = new services_1.BalansService();
var createStreamedView = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newsId, stream_url, IP, findIpOnly, countingViews, updatedViews, findAdminBalans, balans, addBalans, oldNews, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 11, , 12]);
                newsId = +req.body.newsId;
                stream_url = +req.body.stream_url;
                IP = String("122111112");
                return [4 /*yield*/, newsService.findIp(IP)];
            case 1:
                findIpOnly = _b.sent();
                if (!!findIpOnly) return [3 /*break*/, 9];
                return [4 /*yield*/, newsService.createIpWithStream(IP, newsId, stream_url)];
            case 2:
                _b.sent();
                return [4 /*yield*/, newsService.findAllIP(newsId)];
            case 3:
                countingViews = (_b.sent()).map(function (obj) { return obj.id; }).length;
                return [4 /*yield*/, newsService.updatingViews(newsId, countingViews, new Date())];
            case 4:
                updatedViews = _b.sent();
                return [4 /*yield*/, balansService.findAdminBalans(stream_url)
                    // add balans for balans model
                ];
            case 5:
                findAdminBalans = _b.sent();
                // add balans for balans model
                return [4 /*yield*/, balansService.addBalans(10, findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.adminId, stream_url)];
            case 6:
                // add balans for balans model
                _b.sent();
                return [4 /*yield*/, balansService.findAdminAllBalans(findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.adminId)];
            case 7:
                balans = (_b.sent()).map(function (obj) { return obj.amount; }).reduce(function (acc, curr) { return acc + curr; });
                addBalans = ((_a = findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.admin) === null || _a === void 0 ? void 0 : _a.current_balans) + 10;
                // add balans
                return [4 /*yield*/, balansService.addAmount(findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.adminId, addBalans)];
            case 8:
                // add balans
                _b.sent();
                return [2 /*return*/, res.status(200).send({
                        message: "ID: ".concat(newsId, ", stream_url: ").concat(stream_url, " news!"),
                        news: updatedViews
                    })];
            case 9: return [4 /*yield*/, newsService.findNewsById(newsId)];
            case 10:
                oldNews = _b.sent();
                return [2 /*return*/, res.status(200).send({
                        message: "ID: ".concat(newsId, ", stream_url: ").concat(stream_url, " news!"),
                        news: oldNews
                    })];
            case 11:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.createStreamedView = createStreamedView;
//# sourceMappingURL=createStreamed-view.js.map