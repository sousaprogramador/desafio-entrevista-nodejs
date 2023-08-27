import { UserOutput } from '../../application';
import { UserPresenter, UserCollectionPresenter } from './presenter/user.presenter';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
export declare class UserController {
    private listUseCase;
    private getUseCase;
    private createUseCase;
    private updateUseCase;
    private deleteUseCase;
    search(searchParams: SearchUserDto): Promise<UserCollectionPresenter>;
    findOne(id: string): Promise<UserPresenter>;
    create(createUserDto: CreateUserDto): Promise<UserPresenter>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserPresenter>;
    remove(id: string): Promise<void>;
    static userToResponse(output: UserOutput): UserPresenter;
}
