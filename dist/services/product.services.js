"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const tsyringe_1 = require("tsyringe");
const product_repository_1 = require("../data-access/product.repository");
const layererror_handler_1 = require("../helpers/layererror.handler");
let ProductServices = class ProductServices {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(product) {
        try {
            return await this.productRepository.create(product);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async deleteProduct(id) {
        try {
            return await this.productRepository.delete(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async updateProduct(id, product) {
        try {
            return await this.productRepository.update(id, product);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getAllProducts() {
        try {
            return await this.productRepository.findAll();
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getProductById(id) {
        try {
            return await this.productRepository.findById(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
};
exports.ProductServices = ProductServices;
exports.ProductServices = ProductServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductServices);
//# sourceMappingURL=product.services.js.map