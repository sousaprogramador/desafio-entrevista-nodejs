"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("../../../common");
var UserRepository;
(function (UserRepository) {
    class SearchParams extends common_1.SearchParams {
        get filter() {
            return this._filter;
        }
        constructor(props = {}) {
            super(props);
        }
        static create(props = {}) {
            var _a, _b;
            return new SearchParams(Object.assign(Object.assign({}, props), { filter: {
                    name: ((_a = props.filter) === null || _a === void 0 ? void 0 : _a.name) || null,
                    email: ((_b = props.filter) === null || _b === void 0 ? void 0 : _b.email) || null,
                } }));
        }
        set filter(value) {
            const _value = !value || value === '' || typeof value !== 'object'
                ? null
                : value;
            const filter = Object.assign(Object.assign({}, (_value.name && { name: `${_value === null || _value === void 0 ? void 0 : _value.name}` })), (_value.email && { type: _value.email }));
            this._filter = Object.keys(filter).length === 0 ? null : filter;
        }
    }
    UserRepository.SearchParams = SearchParams;
    class SearchResult extends common_1.SearchResult {
    }
    UserRepository.SearchResult = SearchResult;
})(UserRepository = exports.UserRepository || (exports.UserRepository = {}));
exports.default = UserRepository;
//# sourceMappingURL=user.repository.js.map