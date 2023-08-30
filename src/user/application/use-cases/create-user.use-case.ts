import { CryptographyInterface, User, UserRepository } from '../../domain';
import { UserOutput, UserOutputMapper } from '../dto';
import { UseCase as DefaultUseCase } from '../../../common';

export namespace CreateUserUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(
      private userRepo: UserRepository.Repository,
      private crypt: CryptographyInterface,
    ) {}

    async execute(input: Input): Promise<Output> {
      const password = await this.crypt.hash(input.password);

      const entity = new User({
        ...input,
        password,
      });
      await this.userRepo.insert(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }

  export type Input = {
    name: string;
    email: string;
    password: string;
    is_active?: boolean;
    avatar?: string | null;
  };

  export type Output = UserOutput;
}

export default CreateUserUseCase;
