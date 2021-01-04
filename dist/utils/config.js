"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMES_URL = exports.PORT = void 0;
require('dotenv').config();
exports.PORT = process.env.PORT || 3765;
exports.NAMES_URL = 'https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json';
//# sourceMappingURL=config.js.map