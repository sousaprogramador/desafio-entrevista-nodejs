import { NotFoundError } from '../../../domain';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class NotFoundErrorFilter implements ExceptionFilter {
    catch(exception: NotFoundError, host: ArgumentsHost): void;
}
