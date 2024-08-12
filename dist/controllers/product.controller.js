"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tsyringe_1 = require("tsyringe");
const product_services_1 = require("../services/product.services");
const error_handler_1 = require("../helpers/error.handler");
class ProductController {
    static async createProduct(req, res) {
        try {
            const productServices = tsyringe_1.container.resolve(product_services_1.ProductServices);
            const user = await productServices.createProduct(req.body);
            res.status(201).json({
                status: 201,
                user,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async deleteProduct(req, res) {
        try {
            const productServices = tsyringe_1.container.resolve(product_services_1.ProductServices);
            await productServices.deleteProduct(parseInt(req.params.id));
            res.status(200).json({
                status: 200,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async updateProduct(req, res) {
        try {
            const productServices = tsyringe_1.container.resolve(product_services_1.ProductServices);
            await productServices.updateProduct(parseInt(req.params.id), req.body);
            res.status(214).json({
                status: 214,
                message: 'Product successfully updated',
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getAllProducts(_req, res) {
        try {
            const productServices = tsyringe_1.container.resolve(product_services_1.ProductServices);
            const allProducts = await productServices.getAllProducts();
            res.status(200).json({
                status: 200,
                products: allProducts,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getProductById(req, res) {
        try {
            const productServices = tsyringe_1.container.resolve(product_services_1.ProductServices);
            const product = await productServices.getProductById(parseInt(req.params.id));
            res.status(302).json({
                status: 302,
                product,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map