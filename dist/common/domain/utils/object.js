"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = void 0;
function deepFreeze(obj) {
    try {
        const propNames = Object.getOwnPropertyNames(obj);
        for (const name of propNames) {
            const value = obj[name];
            if (value && typeof value === 'object') {
                deepFreeze(value);
            }
        }
        return Object.freeze(obj);
    }
    catch (e) {
        return obj;
    }
}
exports.deepFreeze = deepFreeze;
//# sourceMappingURL=object.js.map