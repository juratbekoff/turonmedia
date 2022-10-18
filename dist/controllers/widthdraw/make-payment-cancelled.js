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
exports.makePaymentCancelled = void 0;
var services_1 = require("../../services");
var client_1 = require("@prisma/client");
var widthdrawService = new services_1.WidthdrawService();
var balansService = new services_1.BalansService();
var makePaymentCancelled = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var widthdrawId, findWidthdraw, backMoney, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                widthdrawId = +req.params.widthdrawId;
                return [4 /*yield*/, widthdrawService.findWidthdrawById(widthdrawId)];
            case 1:
                findWidthdraw = _b.sent();
                if ((findWidthdraw === null || findWidthdraw === void 0 ? void 0 : findWidthdraw.status) == client_1.WidthdrawStatus.PAID) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Siz ushbu pul yechish sorovini o'zgartira olmaysiz! Chunki allaqachon ushbu so'rov uchun to'lov qilib bo'lingan!"
                        })];
                }
                if ((findWidthdraw === null || findWidthdraw === void 0 ? void 0 : findWidthdraw.status) == client_1.WidthdrawStatus.CANCELLED) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Siz ushbu pul yechish sorovini o'zgartira olmaysiz! Chunki so'rov allaqachon bekor qilingan!"
                        })];
                }
                return [4 /*yield*/, widthdrawService.makePaymentCancelled(widthdrawId)];
            case 2:
                _b.sent();
                backMoney = ((_a = findWidthdraw === null || findWidthdraw === void 0 ? void 0 : findWidthdraw.admin) === null || _a === void 0 ? void 0 : _a.current_balans) + (findWidthdraw === null || findWidthdraw === void 0 ? void 0 : findWidthdraw.amount);
                return [4 /*yield*/, balansService.addAmount(findWidthdraw === null || findWidthdraw === void 0 ? void 0 : findWidthdraw.adminId, backMoney)];
            case 3:
                _b.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "Widthdraw request cancelled!",
                        status: client_1.WidthdrawStatus.CANCELLED
                    })];
            case 4:
                error_1 = _b.sent();
                next();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.makePaymentCancelled = makePaymentCancelled;
//# sourceMappingURL=make-payment-cancelled.js.map