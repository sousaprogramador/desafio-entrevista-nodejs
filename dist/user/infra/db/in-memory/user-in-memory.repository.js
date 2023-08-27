"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInMemoryRepository = void 0;
const domain_1 = require("../../../../common/domain");
class UserInMemoryRepository extends domain_1.InMemorySearchableRepository {
    constructor() {
        super(...arguments);
        this.sortableFields = ['name', 'email', 'created_at'];
    }
    async applyFilter(items, filter) {
        if (!filter) {
            return items;
        }
        return items.filter((i) => {
            const hasName = filter.name &&
                i.props.name.toLowerCase().includes(filter.name.toLowerCase());
            const hasEmail = filter.email &&
                i.props.email.toLowerCase().includes(filter.email.toLowerCase());
            return hasName || hasEmail;
        });
    }
    applySort(items, sort, sort_dir) {
        return !sort
            ? super.applySort(items, 'created_at', 'desc')
            : super.applySort(items, sort, sort_dir);
    }
}
exports.UserInMemoryRepository = UserInMemoryRepository;
exports.default = UserInMemoryRepository;
//# sourceMappingURL=user-in-memory.repository.js.map