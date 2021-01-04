"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const requestLogger = (request, response, next) => {
    logger_1.default.info('Method: ', request.method);
    logger_1.default.info('Path: ', request.path);
    logger_1.default.info('Body: ', request.body);
    logger_1.default.info('...');
    next();
};
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};
exports.default = {
    requestLogger,
    unknownEndpoint,
};
//# sourceMappingURL=middleware.js.map