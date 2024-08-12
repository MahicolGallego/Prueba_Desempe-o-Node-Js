"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const tsyringe_1 = require("tsyringe");
const cart_services_1 = require("../services/cart.services");
const error_handler_1 = require("../helpers/error.handler");
class CartController {
    static async addProduct(req, res) {
        try {
            const cartServices = tsyringe_1.container.resolve(cart_services_1.CartServices);
            const newProduct = await cartServices.addProduct(req.body);
            res.status(201).json({
                status: 201,
                product_add: newProduct,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async deleteProduct(req, res) {
        try {
            const cartServices = tsyringe_1.container.resolve(cart_services_1.CartServices);
            await cartServices.deleteProduct(parseInt(req.params.card_id), parseInt(req.params.product_id));
            res.status(200).json({
                status: 200,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async updateProductQuantity(req, res) {
        try {
            const { quantity } = req.body;
            const cartServices = tsyringe_1.container.resolve(cart_services_1.CartServices);
            await cartServices.updateProductQuantity(parseInt(req.params.card_id), parseInt(req.params.product_id), quantity);
            res.status(214).json({
                status: 214,
                message: 'Product in cart successfully updated',
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
}
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map