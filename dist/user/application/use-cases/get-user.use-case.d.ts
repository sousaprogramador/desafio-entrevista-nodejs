import { UserRepository } from '../../domain';
import { UserOutput } from '../dto/user-output';
import { UseCase as DefaultUseCase } from '../../../common';
export declare namespace GetUserUseCase {
    class UseCase implements DefaultUseCase<Input, Output> {
        private userRepo;
        constructor(userRepo: UserRepository.Repository);
        execute(input: Input): Promise<any>;
    }
    type Input = {
        id: string;
    };
    type Output = UserOutput;
}
export default GetUserUseCase;
