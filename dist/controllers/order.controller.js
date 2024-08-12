"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const tsyringe_1 = require("tsyringe");
const order_services_1 = require("../services/order.services");
const error_handler_1 = require("../helpers/error.handler");
class OrderController {
    static async createOrder(req, res) {
        try {
            const orderServices = tsyringe_1.container.resolve(order_services_1.OrderServices);
            const order = await orderServices.createOrder(req.body);
            res.status(201).json({
                status: 201,
                order,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async deleteOrder(req, res) {
        try {
            const orderServices = tsyringe_1.container.resolve(order_services_1.OrderServices);
            await orderServices.deleteOrder(parseInt(req.params.id));
            res.status(200).json({
                status: 200,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async updateOrder(req, res) {
        try {
            const orderServices = tsyringe_1.container.resolve(order_services_1.OrderServices);
            await orderServices.updateOrder(parseInt(req.params.id), req.body);
            res.status(214).json({
                status: 214,
                message: 'Order successfully updated',
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getAllOrders(_req, res) {
        try {
            const orderServices = tsyringe_1.container.resolve(order_services_1.OrderServices);
            const allOrders = await orderServices.getAllOrders();
            res.status(200).json({
                status: 200,
                orders: allOrders,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getOrderById(req, res) {
        try {
            const orderServices = tsyringe_1.container.resolve(order_services_1.OrderServices);
            const order = await orderServices.getOrderById(parseInt(req.params.id));
            res.status(302).json({
                status: 302,
                order,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getOrdersByUser(req, res) {
        try {
            const orderServices = tsyringe_1.container.resolve(order_services_1.OrderServices);
            const allOrdersByUser = await orderServices.getOrdersByUser(parseInt(req.params.id));
            res.status(302).json({
                status: 302,
                orders: allOrdersByUser,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map