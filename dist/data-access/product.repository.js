"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const tsyringe_1 = require("tsyringe");
const product_model_1 = require("../models/product.model");
const layererror_handler_1 = require("../helpers/layererror.handler");
let ProductRepository = class ProductRepository {
    async create(product) {
        try {
            return await product_model_1.Product.create(product);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async delete(id) {
        try {
            return await product_model_1.Product.destroy({ where: { id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async update(id, product) {
        try {
            return await product_model_1.Product.update(product, { where: { id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findById(id) {
        try {
            return await product_model_1.Product.findByPk(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findAll() {
        try {
            return await product_model_1.Product.findAll();
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
//# sourceMappingURL=product.repository.js.map