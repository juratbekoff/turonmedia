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
exports.dashbaord = void 0;
var index_1 = require("../../services/index");
var dashbaordService = new index_1.DashboardService();
var dashbaord = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var news, views, admins, admins_balans, widthdraws, widthdraws_amount, cancelled_widthdraws, paid_widthdraws, checking_widthdraws, streams, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 11, , 12]);
                return [4 /*yield*/, dashbaordService.getNewsCount()];
            case 1:
                news = (_a.sent()).map(function (obj) { return obj.id; }).length;
                return [4 /*yield*/, dashbaordService.getViewsCount()];
            case 2:
                views = (_a.sent()).map(function (obj) { return obj.id; }).length;
                return [4 /*yield*/, dashbaordService.getAdminsCount()];
            case 3:
                admins = (_a.sent()).map(function (obj) { return obj.id; }).length;
                return [4 /*yield*/, dashbaordService.getAdminsCount()];
            case 4:
                admins_balans = (_a.sent()).map(function (obj) { return obj.current_balans; }).reduce(function (acc, curr) { return acc + curr; });
                return [4 /*yield*/, dashbaordService.getWidthdrawsCount()];
            case 5:
                widthdraws = (_a.sent()).map(function (obj) { return obj.id; }).length;
                return [4 /*yield*/, dashbaordService.getWidthdrawsCount()];
            case 6:
                widthdraws_amount = (_a.sent()).map(function (obj) { return obj.amount; }).reduce(function (acc, curr) { return acc + curr; });
                return [4 /*yield*/, dashbaordService.getWidthdrawsCount()];
            case 7:
                cancelled_widthdraws = (_a.sent()).filter(function (obj) { return obj.status == "CANCELLED"; }).length;
                return [4 /*yield*/, dashbaordService.getWidthdrawsCount()];
            case 8:
                paid_widthdraws = (_a.sent()).filter(function (obj) { return obj.status == "PAID"; }).length;
                return [4 /*yield*/, dashbaordService.getWidthdrawsCount()];
            case 9:
                checking_widthdraws = (_a.sent()).filter(function (obj) { return obj.status == "CHECKING"; }).length;
                return [4 /*yield*/, dashbaordService.getStreamsCount()];
            case 10:
                streams = (_a.sent()).map(function (obj) { return obj.id; }).length;
                return [2 /*return*/, res.status(200).json({
                        message: "Welcome to Dashboard!",
                        dashboard: {
                            news: news,
                            views: views,
                            admins: admins,
                            admins_balans: admins_balans,
                            widthdraws: widthdraws,
                            checking_widthdraws: checking_widthdraws,
                            cancelled_widthdraws: cancelled_widthdraws,
                            paid_widthdraws: paid_widthdraws,
                            widthdraws_amount: widthdraws_amount,
                            streams: streams
                        }
                    })];
            case 11:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.dashbaord = dashbaord;
//# sourceMappingURL=dashboard.js.map