import { EntityValidationError } from '../../../domain';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class EntityValidationErrorFilter implements ExceptionFilter {
    catch(exception: EntityValidationError, host: ArgumentsHost): void;
}
