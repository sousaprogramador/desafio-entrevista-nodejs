import { SortDirection } from '../../../../common';
import { ListUsersUseCase } from '../../../application';
export declare class SearchUserDto implements ListUsersUseCase.Input {
    page?: number;
    per_page?: number;
    sort?: string;
    sort_dir?: SortDirection;
    filter?: {
        name?: string;
        email?: string;
    };
}
