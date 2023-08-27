"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserId = void 0;
const common_1 = require("../../../common");
const user_validator_1 = require("../validators/user.validator");
const user_fake_builder_1 = require("./user-fake-builder");
class UserId extends common_1.UniqueEntityId {
}
exports.UserId = UserId;
class User extends common_1.AggregateRoot {
    constructor(props, entityId) {
        var _a, _b, _c;
        super(props, entityId !== null && entityId !== void 0 ? entityId : new UserId());
        this.props = props;
        User.validate(props);
        this.name = this.props.name;
        this.email = this.props.email;
        this.password = this.props.password;
        this.avatar = (_a = this.props.avatar) !== null && _a !== void 0 ? _a : null;
        this.props.is_active = (_b = this.props.is_active) !== null && _b !== void 0 ? _b : true;
        this.props.created_at = (_c = this.props.created_at) !== null && _c !== void 0 ? _c : new Date();
    }
    update(data) {
        var _a;
        User.validate(data);
        this.name = data.name;
        this.email = data.email;
        this.avatar = (_a = data.avatar) !== null && _a !== void 0 ? _a : null;
        this.is_active = data.is_active;
    }
    static validate(props) {
        const validator = user_validator_1.UserValidatorFactory.create();
        const isValid = validator.validate(props);
        if (!isValid) {
            throw new common_1.EntityValidationError(validator.errors);
        }
    }
    activate() {
        this.props.is_active = true;
    }
    deactivate() {
        this.props.is_active = false;
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get email() {
        return this.props.email;
    }
    set email(value) {
        this.props.email = value;
    }
    get password() {
        return this.props.password;
    }
    set password(value) {
        this.props.password = value;
    }
    get avatar() {
        return this.props.avatar;
    }
    set avatar(value) {
        this.props.avatar = value;
    }
    get is_active() {
        return this.props.is_active;
    }
    set is_active(value) {
        this.props.is_active = value !== null && value !== void 0 ? value : true;
    }
    get created_at() {
        return this.props.created_at;
    }
    static fake() {
        return user_fake_builder_1.UserFakeBuilder;
    }
    toJSON() {
        return {
            id: this.id.toString(),
            name: this.name,
            password: this.password,
            email: this.email,
            avatar: this.avatar,
            is_active: this.is_active,
            created_at: this.created_at,
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map