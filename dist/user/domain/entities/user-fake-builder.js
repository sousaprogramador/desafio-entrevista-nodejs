"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFakeBuilder = void 0;
const user_1 = require("./user");
const chance_1 = require("chance");
class UserFakeBuilder {
    constructor(countObjs = 1) {
        this._entity_id = undefined;
        this._name = (_index) => this.chance.word();
        this._email = (_index) => this.chance.email();
        this._password = (_index) => this.chance.word();
        this._avatar = (_index) => this.chance.word();
        this._is_active = (_index) => true;
        this._created_at = undefined;
        this.countObjs = 1;
        this.countObjs = countObjs;
        this.chance = (0, chance_1.Chance)();
    }
    static aUser() {
        return new UserFakeBuilder();
    }
    static theUsers(countObjs) {
        return new UserFakeBuilder(countObjs);
    }
    withEntityId(valueOrFactory) {
        this._entity_id = valueOrFactory;
        return this;
    }
    withName(valueOrFactory) {
        this._name = valueOrFactory;
        return this;
    }
    withInvalidNameEmpty(value) {
        this._name = value;
        return this;
    }
    withInvalidNameNotAString(value) {
        this._name = value !== null && value !== void 0 ? value : 5;
        return this;
    }
    withInvalidNameTooLong(value) {
        this._name = value !== null && value !== void 0 ? value : this.chance.word({ length: 256 });
        return this;
    }
    withEmail(valueOrFactory) {
        this._email = valueOrFactory;
        return this;
    }
    withAvatar(valueOrFactory) {
        this._avatar = valueOrFactory;
        return this;
    }
    activate() {
        this._is_active = true;
        return this;
    }
    deactivate() {
        this._is_active = false;
        return this;
    }
    withInvalidIsActiveEmpty(value) {
        this._is_active = value;
        return this;
    }
    withInvalidIsActiveNotABoolean(value) {
        this._is_active = value !== null && value !== void 0 ? value : 'fake boolean';
        return this;
    }
    withCreatedAt(valueOrFactory) {
        this._created_at = valueOrFactory;
        return this;
    }
    build() {
        const users = new Array(this.countObjs).fill(undefined).map((_, index) => new user_1.User(Object.assign({ name: this.callFactory(this._name, index), email: this.callFactory(this._email, index), password: this.callFactory(this._password, index), avatar: this.callFactory(this._avatar, index), is_active: this.callFactory(this._is_active, index) }, (this._created_at && {
            created_at: this.callFactory(this._created_at, index),
        })), !this._entity_id
            ? undefined
            : this.callFactory(this._entity_id, index)));
        return this.countObjs === 1 ? users[0] : users;
    }
    get entity_id() {
        return this.getValue('entity_id');
    }
    get name() {
        return this.getValue('name');
    }
    get email() {
        return this.getValue('email');
    }
    get password() {
        return this.getValue('password');
    }
    get avatar() {
        return this.getValue('avatar');
    }
    get is_active() {
        return this.getValue('is_active');
    }
    get created_at() {
        return this.getValue('created_at');
    }
    getValue(prop) {
        const optional = ['entity_id', 'created_at'];
        const privateProp = `_${prop}`;
        if (!this[privateProp] && optional.includes(prop)) {
            throw new Error(`Property ${prop} not have a factory, use 'with' methods`);
        }
        return this.callFactory(this[privateProp], 0);
    }
    callFactory(factoryOrValue, index) {
        return typeof factoryOrValue === 'function'
            ? factoryOrValue(index)
            : factoryOrValue;
    }
}
exports.UserFakeBuilder = UserFakeBuilder;
//# sourceMappingURL=user-fake-builder.js.map