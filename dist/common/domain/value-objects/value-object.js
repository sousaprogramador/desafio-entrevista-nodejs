"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const isEqual_1 = require("lodash/isEqual");
const utils_1 = require("../utils");
class ValueObject {
    constructor(value) {
        this.toString = () => {
            if (typeof this.value !== 'object' || this.value === null) {
                try {
                    return this.value.toString();
                }
                catch (e) {
                    return this.value + '';
                }
            }
            const valueStr = this.value.toString();
            return valueStr === '[object Object]'
                ? JSON.stringify(this.value)
                : valueStr;
        };
        this._value = (0, utils_1.deepFreeze)(value);
    }
    get value() {
        return this._value;
    }
    equals(obj) {
        if (obj === null || obj === undefined) {
            return false;
        }
        if (obj.value === undefined) {
            return false;
        }
        if (obj.constructor.name !== this.constructor.name) {
            return false;
        }
        return (0, isEqual_1.default)(this.value, obj.value);
    }
}
exports.ValueObject = ValueObject;
exports.default = ValueObject;
//# sourceMappingURL=value-object.js.map