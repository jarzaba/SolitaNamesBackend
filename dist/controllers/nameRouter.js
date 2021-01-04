"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameRouter = void 0;
require('dotenv').config();
const config_1 = require("../utils/config");
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
exports.nameRouter = express_1.Router();
exports.nameRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const names = yield axios_1.default
            .get(config_1.NAMES_URL)
            .then((response) => response.data.names);
        response.json(names);
    }
    catch (error) {
        response.status(404).end();
    }
}));
exports.nameRouter.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const names = yield axios_1.default
        .get(config_1.NAMES_URL)
        .then((response) => response.data.names);
    const selectedName = names.find((name) => name.name.toLowerCase() === request.params.id.toLocaleLowerCase());
    console.log('selectedName: ', selectedName);
    if (selectedName) {
        response.json(selectedName);
    }
    else {
        response.status(404).end();
    }
}));
//# sourceMappingURL=nameRouter.js.map