import { AggregateRoot, Entity } from '../entity';
import { ValueObject } from '../value-objects';
export interface RepositoryInterface<E extends AggregateRoot, EntityId extends ValueObject> {
    insert(entity: E): Promise<void>;
    bulkInsert(entities: E[]): Promise<void>;
    findById(id: string | EntityId): Promise<E>;
    findAll(): Promise<E[]>;
    update(entity: E): Promise<void>;
    delete(id: string | EntityId): Promise<void>;
}
export declare type SortDirection = 'asc' | 'desc';
export declare type SearchProps<Filter = string> = {
    page?: number;
    per_page?: number;
    sort?: string | null;
    sort_dir?: SortDirection | null;
    filter?: Filter | null;
};
export declare class SearchParams<Filter = string> {
    protected _page: number;
    protected _per_page: number;
    protected _sort: string | null;
    protected _sort_dir: SortDirection | null;
    protected _filter: Filter | null;
    constructor(props?: SearchProps<Filter>);
    get page(): number;
    private set page(value);
    get per_page(): number;
    private set per_page(value);
    get sort(): string | null;
    private set sort(value);
    get sort_dir(): SortDirection | null;
    private set sort_dir(value);
    get filter(): Filter | null;
    protected set filter(value: Filter | null);
}
declare type SearchResultProps<E extends Entity, Filter> = {
    items: E[];
    total: number;
    current_page: number;
    per_page: number;
    sort: string | null;
    sort_dir: string | null;
    filter: Filter | null;
};
export declare class SearchResult<E extends Entity = Entity, Filter = string> {
    readonly items: E[];
    readonly total: number;
    readonly current_page: number;
    readonly per_page: number;
    readonly last_page: number;
    readonly sort: string | null;
    readonly sort_dir: string | null;
    readonly filter: Filter;
    constructor(props: SearchResultProps<E, Filter>);
    toJSON(forceEntity?: boolean): {
        items: Required<any>[];
        total: number;
        current_page: number;
        per_page: number;
        last_page: number;
        sort: string;
        sort_dir: string;
        filter: any;
    };
}
export interface SearchableRepositoryInterface<E extends Entity, EntityId extends ValueObject, Filter = string, SearchInput = SearchParams<Filter>, SearchOutput = SearchResult<E, Filter>> extends RepositoryInterface<E, EntityId> {
    sortableFields: string[];
    search(props: SearchInput): Promise<SearchOutput>;
}
export {};
