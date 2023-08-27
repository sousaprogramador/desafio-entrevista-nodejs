import { INestApplication } from '@nestjs/common';
export declare function startApp({ beforeInit, }?: {
    beforeInit?: (app: INestApplication) => void;
}): {
    readonly app: INestApplication<any>;
};
