"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const createopt_cors_1 = require("../helpers/createopt.cors");
const cors_1 = __importDefault(require("cors"));
const user_controller_1 = require("../controllers/user.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), user_controller_1.UserController.getAllUsers);
exports.userRouter.get('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), user_controller_1.UserController.getUserById);
exports.userRouter.put('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.updateWhitelist)), user_controller_1.UserController.updateUser);
exports.userRouter.delete('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.deleteWhitelist)), user_controller_1.UserController.deleteUser);
//# sourceMappingURL=user.router.js.map