"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyGlobalConfig = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const common_2 = require("./common");
function applyGlobalConfig(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: 422,
        transform: true,
    }));
    app.useGlobalInterceptors(new common_2.WrapperDataInterceptor(), new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.useGlobalFilters(new common_2.EntityValidationErrorFilter(), new common_2.SearchValidationErrorFilter(), new common_2.NotFoundErrorFilter());
}
exports.applyGlobalConfig = applyGlobalConfig;
//# sourceMappingURL=global-config.js.map