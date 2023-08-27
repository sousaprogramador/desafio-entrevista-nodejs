import { UserRepository } from '../../domain';
import { UserOutput } from '../dto';
import { SearchInputDto, PaginationOutputDto, UseCase as DefaultUseCase } from '../../../common';
export declare namespace ListUsersUseCase {
    class UseCase implements DefaultUseCase<Input, Output> {
        private userRepo;
        constructor(userRepo: UserRepository.Repository);
        execute(input: Input): Promise<Output>;
        private toOutput;
    }
    type Input = SearchInputDto<{
        name?: string;
        email?: string;
    }>;
    type Output = PaginationOutputDto<UserOutput>;
}
export default ListUsersUseCase;
