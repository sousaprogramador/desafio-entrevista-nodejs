"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const global_config_1 = require("./global-config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, global_config_1.applyGlobalConfig)(app);
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map