import { User } from '../../../domain/entities';
export declare class UserFixture {
    static keysInResponse(): string[];
    static arrangeForSave(): {
        send_data: {
            name: string;
            email: string;
            password: string;
            avatar: string;
        };
        expected: {
            name: string;
            email: string;
            avatar: string;
            is_active: boolean;
        };
    }[];
    static arrangeInvalidRequest(): {
        EMPTY: {
            send_data: {};
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_UNDEFINED: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_NULL: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_EMPTY: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
    };
    static arrangeForEntityValidationError(): {
        EMPTY: {
            send_data: {};
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_UNDEFINED: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
    };
}
export declare class CreateUserFixture {
    static keysInResponse(): string[];
    static arrangeForSave(): {
        send_data: {
            name: string;
            email: string;
            password: string;
            avatar: string;
        };
        expected: {
            name: string;
            email: string;
            avatar: string;
            is_active: boolean;
        };
    }[];
    static arrangeInvalidRequest(): {
        EMPTY: {
            send_data: {};
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_UNDEFINED: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_NULL: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_EMPTY: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
    };
    static arrangeForEntityValidationError(): {
        EMPTY: {
            send_data: {};
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_UNDEFINED: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
    };
}
export declare class UpdateUserFixture {
    static keysInResponse(): string[];
    static arrangeForSave(): {
        send_data: {
            name: string;
            email: string;
            password: string;
            avatar: string;
        };
        expected: {
            name: string;
            email: string;
            avatar: string;
            is_active: boolean;
        };
    }[];
    static arrangeInvalidRequest(): {
        EMPTY: {
            send_data: {};
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_UNDEFINED: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_NULL: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_EMPTY: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
    };
    static arrangeForEntityValidationError(): {
        EMPTY: {
            send_data: {};
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
        NAME_UNDEFINED: {
            send_data: {
                name: any;
            };
            expected: {
                statusCode: number;
                error: string;
                message: string[];
            };
        };
    };
}
export declare class ListUsersFixture {
    static arrangeIncrementedWithCreatedAt(): {
        arrange: ({
            send_data: {
                page?: undefined;
                per_page?: undefined;
            };
            expected: {
                entities: User[];
                meta: {
                    current_page: number;
                    last_page: number;
                    per_page: number;
                    total: number;
                };
            };
        } | {
            send_data: {
                page: number;
                per_page: number;
            };
            expected: {
                entities: User[];
                meta: {
                    current_page: number;
                    last_page: number;
                    per_page: number;
                    total: number;
                };
            };
        })[];
        entitiesMap: {
            first: User;
            second: User;
            third: User;
            fourth: User;
        };
    };
    static arrangeUnsorted(): {
        arrange: {
            send_data: {
                page: number;
                per_page: number;
                sort: string;
                filter: {
                    name: string;
                    email: any;
                };
            };
            expected: {
                entities: User[];
                meta: {
                    current_page: number;
                    per_page: number;
                    last_page: number;
                    total: number;
                };
            };
        }[];
        entitiesMap: {
            a: User;
            AAA: User;
            AaA: User;
            b: User;
            c: User;
        };
    };
}
