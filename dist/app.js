"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//require('express-async-errors');
const app = express_1.default();
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const nameRouter_1 = require("./controllers/nameRouter");
const middleware_1 = __importDefault(require("./utils/middleware"));
app.use(cors_1.default());
app.use(express_1.default.json());
morgan_1.default.token('req_body', (req, res) => JSON.stringify(req.body));
app.use(morgan_1.default('tiny'));
app.use(express_1.default.static('build'));
app.use(middleware_1.default.requestLogger);
app.use('/api/names', nameRouter_1.nameRouter);
app.use(middleware_1.default.unknownEndpoint);
exports.default = app;
//# sourceMappingURL=app.js.map