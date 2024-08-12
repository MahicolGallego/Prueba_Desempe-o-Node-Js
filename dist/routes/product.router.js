"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const createopt_cors_1 = require("../helpers/createopt.cors");
const cors_1 = __importDefault(require("cors"));
const product_controller_1 = require("../controllers/product.controller");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), product_controller_1.ProductController.getAllProducts);
exports.productRouter.get('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.getWhitelist)), product_controller_1.ProductController.getProductById);
exports.productRouter.post('/', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.postWhitelist)), product_controller_1.ProductController.createProduct);
exports.productRouter.put('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.updateWhitelist)), product_controller_1.ProductController.updateProduct);
exports.productRouter.delete('/:id', (0, cors_1.default)((0, createopt_cors_1.createCorsOptions)(createopt_cors_1.deleteWhitelist)), product_controller_1.ProductController.deleteProduct);
//# sourceMappingURL=product.router.js.map