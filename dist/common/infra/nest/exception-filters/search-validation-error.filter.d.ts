import { SearchValidationError } from '../../../domain';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class SearchValidationErrorFilter implements ExceptionFilter {
    catch(exception: SearchValidationError, host: ArgumentsHost): void;
}
