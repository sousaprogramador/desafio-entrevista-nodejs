"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1690671084386 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1690671084386 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                { name: 'name', type: 'varchar' },
                { name: 'email', type: 'varchar', isUnique: true },
                { name: 'password', type: 'varchar', isNullable: false },
                { name: 'avatar', type: 'text', isNullable: true },
                { name: 'is_active', type: 'boolean', default: true },
                { name: 'created_at', type: 'timestamp', default: 'now()' },
                { name: 'updated_at', type: 'timestamp', default: 'now()' },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUser1690671084386 = CreateUser1690671084386;
//# sourceMappingURL=1690671084386-create_user.js.map