"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
const testing_1 = require("@nestjs/testing");
const app_module_1 = require("../../../../app.module");
const global_config_1 = require("../../../../global-config");
function startApp({ beforeInit, } = {}) {
    let _app;
    beforeEach(async () => {
        const moduleBuilder = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        _app = moduleBuilder.createNestApplication();
        (0, global_config_1.applyGlobalConfig)(_app);
        beforeInit && beforeInit(_app);
        await _app.init();
    });
    afterEach(async () => {
        if (_app) {
            await _app.close();
        }
    });
    return {
        get app() {
            return _app;
        },
    };
}
exports.startApp = startApp;
//# sourceMappingURL=index.js.map