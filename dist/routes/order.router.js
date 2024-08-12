"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const createopt_cors_1 = require("../helpers/createopt.cors");
const cors_1 = __importDefault(require("cors"));
const order_controller_1 = require("../controllers/order.controller");
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.get('/', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), order_controller_1.OrderController.getAllOrders);
exports.orderRouter.get('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), order_controller_1.OrderController.getOrderById);
exports.orderRouter.get('/:id/user', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), order_controller_1.OrderController.getOrdersByUser);
exports.orderRouter.post('/', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.postWhitelist)), order_controller_1.OrderController.createOrder);
exports.orderRouter.put('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.updateWhitelist)), order_controller_1.OrderController.updateOrder);
exports.orderRouter.delete('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.deleteWhitelist)), order_controller_1.OrderController.deleteOrder);
//# sourceMappingURL=order.router.js.map