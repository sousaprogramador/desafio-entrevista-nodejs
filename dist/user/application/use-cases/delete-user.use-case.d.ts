import { UserRepository } from '../../domain';
import { UseCase as DefaultUseCase } from '../../../common';
export declare namespace DeleteUserUseCase {
    export class UseCase implements DefaultUseCase<Input, Output> {
        private userRepository;
        constructor(userRepository: UserRepository.Repository);
        execute(input: Input): Promise<Output>;
    }
    export type Input = {
        id: string;
    };
    type Output = void;
    export {};
}
export default DeleteUserUseCase;
