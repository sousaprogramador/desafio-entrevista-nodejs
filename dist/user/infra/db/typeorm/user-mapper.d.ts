import { UserEntity } from './user.entity';
import { User } from '../../../domain';
export declare class UserModelMapper {
    static toEntity(model: UserEntity): User;
}
