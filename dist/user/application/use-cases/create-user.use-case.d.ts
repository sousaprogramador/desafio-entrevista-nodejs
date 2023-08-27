import { UserRepository } from '../../domain';
import { UserOutput } from '../dto';
import { UseCase as DefaultUseCase } from '../../../common';
export declare namespace CreateUserUseCase {
    class UseCase implements DefaultUseCase<Input, Output> {
        private userRepo;
        constructor(userRepo: UserRepository.Repository);
        execute(input: Input): Promise<Output>;
    }
    type Input = {
        name: string;
        email: string;
        password: string;
        is_active?: boolean;
        avatar?: string | null;
    };
    type Output = UserOutput;
}
export default CreateUserUseCase;
