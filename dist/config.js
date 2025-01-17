"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../config.json'), {
    encoding: 'utf-8',
}));
exports.default = config;
