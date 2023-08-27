import { CreateUserUseCase } from '../../../application';
export declare class CreateUserDto implements CreateUserUseCase.Input {
    name: string;
    email: string;
    password: string;
    avatar?: string | null;
    is_active?: boolean;
    created_at?: Date;
}
