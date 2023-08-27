"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(props, entityId) {
        this.props = props;
        this.entityId = entityId;
    }
    get id() {
        return this.entityId.value;
    }
}
exports.Entity = Entity;
exports.default = Entity;
//# sourceMappingURL=entity.js.map