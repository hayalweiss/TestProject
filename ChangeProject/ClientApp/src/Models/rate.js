"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rate = /** @class */ (function () {
    function Rate() {
        this.rates = [];
        this.success = true;
        this.timestamp = 0;
        this.base = "";
        this.date = "";
    }
    return Rate;
}());
exports.Rate = Rate;
//export class Currency {
//  name: string = "";
//  num: number = 0;
//}
var RateHistory = /** @class */ (function () {
    function RateHistory() {
        this.option1 = new Option;
        this.option2 = new Option;
    }
    return RateHistory;
}());
exports.RateHistory = RateHistory;
var Option = /** @class */ (function () {
    function Option() {
        this.key = "";
        this.value = 0;
    }
    return Option;
}());
exports.Option = Option;
//# sourceMappingURL=rate.js.map