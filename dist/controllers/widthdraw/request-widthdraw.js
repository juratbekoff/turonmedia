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
exports.requestWidthdraw = void 0;
var services_1 = require("../../services");
var widthdrawService = new services_1.WidthdrawService();
var balansService = new services_1.BalansService();
var requestWidthdraw = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, adminId, amount, findAdminBalans, decreasedCurrentBalans, requestWidthdraw_1, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, adminId = _a.adminId, amount = _a.amount;
                return [4 /*yield*/, balansService.findAdminById(+adminId)];
            case 1:
                findAdminBalans = _b.sent();
                if ((findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans) < amount) {
                    return [2 /*return*/, res.status(200).send({
                            message: "Kechirasiz! siz maximum ".concat(findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans, " so'm yechib bilasiz!")
                        })];
                }
                if ((findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans) === 0) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Sizda sorov yuborish uchun mablag yetarli emas!",
                            your_balans: findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans
                        })];
                }
                if ((findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans) < 40) {
                    return [2 /*return*/, res.status(400).json({
                            message: "Kechirasiz! platformadan eng kamida 40 so'mdan kam bo'lmagan miqdorda pul yechish mumkin!",
                            your_balans: findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans
                        })];
                }
                decreasedCurrentBalans = (findAdminBalans === null || findAdminBalans === void 0 ? void 0 : findAdminBalans.current_balans) - amount;
                return [4 /*yield*/, balansService.addAmount(adminId, decreasedCurrentBalans)];
            case 2:
                _b.sent();
                return [4 /*yield*/, widthdrawService.requestWidthdraw(adminId, amount)];
            case 3:
                requestWidthdraw_1 = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "Pul yechish boyicha so'rovingiz qabul qilindi!",
                        status: requestWidthdraw_1.status,
                        current_balans: decreasedCurrentBalans
                    })];
            case 4:
                error_1 = _b.sent();
                next();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.requestWidthdraw = requestWidthdraw;
//# sourceMappingURL=request-widthdraw.js.map