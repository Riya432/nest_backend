"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
const config_1 = require("@nestjs/config");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('port');
    app.use(cookieParser());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe({ whitelist: true }));
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map