"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeOrmRepository = void 0;
const typeorm_1 = require("typeorm");
const domain_1 = require("../../../domain");
const user_mapper_1 = require("./user-mapper");
const common_1 = require("../../../../common");
class UserTypeOrmRepository {
    constructor(userModel) {
        this.userModel = userModel;
        this.sortableFields = ['name', 'email'];
    }
    async search(props) {
        const offset = (props.page - 1) * props.per_page;
        const limit = props.per_page;
        const columnFilters = {};
        if (props.filter && (props.filter.name || props.filter.email)) {
            if (props.filter.name) {
                columnFilters['name'] = `%${props.filter.name}%`;
            }
            if (props.filter.email) {
                columnFilters['email'] = `%${props.filter.email}%`;
            }
        }
        const where = {};
        for (const i in columnFilters) {
            where[i] = (0, typeorm_1.Like)(`%${columnFilters[i]}%`);
        }
        const [models, count] = await this.userModel.findAndCount(Object.assign(Object.assign({ where }, (props.sort && this.sortableFields.includes(props.sort)
            ? { order: { [props.sort]: `${props.sort_dir}` } }
            : { order: { created_at: 'DESC' } })), { skip: offset, take: limit }));
        return new domain_1.UserRepository.SearchResult({
            items: models.map((m) => user_mapper_1.UserModelMapper.toEntity(m)),
            current_page: props.page,
            per_page: props.per_page,
            total: count,
            filter: props.filter,
            sort: props.sort,
            sort_dir: props.sort_dir,
        });
    }
    async insert(entity) {
        const user = this.userModel.create(entity.toJSON());
        await this.userModel.save(user);
    }
    async bulkInsert(entities) {
        const user = this.userModel.create(entities.map((e) => e.toJSON()));
        await this.userModel.save(user);
    }
    async findById(id) {
        const _id = `${id}`;
        const model = await this._get(_id);
        return user_mapper_1.UserModelMapper.toEntity(model);
    }
    async findAll() {
        const models = await this.userModel.find();
        return models.map((m) => user_mapper_1.UserModelMapper.toEntity(m));
    }
    async update(entity) {
        await this._get(entity.id);
        const users = await this.userModel.preload(Object.assign({ id: entity.id }, entity.toJSON()));
        await this.userModel.save(users);
    }
    async delete(id) {
        await this._get(`${id}`);
        await this.userModel.delete({ id: `${id}` });
    }
    async _get(id) {
        try {
            const user = await this.userModel.findOneByOrFail({ id: `${id}` });
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundError(`Entity Not Found using ID ${id}`);
        }
    }
}
exports.UserTypeOrmRepository = UserTypeOrmRepository;
//# sourceMappingURL=user.repository.js.map