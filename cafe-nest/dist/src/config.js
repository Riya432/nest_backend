"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    port: process.env.PORT || 5000,
    secretKey: process.env.SECRET_KEY || 'TopSecret51@',
    mongoUri: process.env.MONGO_URi || 'mongodb+srv://Riya:Riya@mongodbcodewithharry.86453cn.mongodb.net/cafe',
});
exports.config = config;
//# sourceMappingURL=config.js.map