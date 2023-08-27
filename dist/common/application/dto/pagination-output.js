"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationOutputMapper = void 0;
class PaginationOutputMapper {
    static toOutput(items, props) {
        return {
            items,
            total: props.total,
            current_page: props.current_page,
            last_page: props.last_page,
            per_page: props.per_page,
        };
    }
}
exports.PaginationOutputMapper = PaginationOutputMapper;
//# sourceMappingURL=pagination-output.js.map