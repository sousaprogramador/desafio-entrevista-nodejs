import { SearchResult } from '../../domain';
export declare type PaginationOutputDto<Item = any> = {
    items: Item[];
    total: number;
    current_page: number;
    last_page: number;
    per_page: number;
};
export declare class PaginationOutputMapper {
    static toOutput<Item = any, Filter = any>(items: Item[], props: SearchResult<any, Filter>): PaginationOutputDto<Item>;
}
