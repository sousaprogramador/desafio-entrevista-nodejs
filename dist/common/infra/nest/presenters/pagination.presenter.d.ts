export declare type PaginationPresenterProps = {
    current_page: number;
    per_page: number;
    last_page: number;
    total: number;
};
export declare class PaginationPresenter {
    current_page: number;
    per_page: number;
    last_page: number;
    total: number;
    constructor(props: PaginationPresenterProps);
}
