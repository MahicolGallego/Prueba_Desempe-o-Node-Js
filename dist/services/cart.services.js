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
exports.CartServices = void 0;
const tsyringe_1 = require("tsyringe");
const cartproduct_repository_1 = require("../data-access/cartproduct.repository");
const cart_repository_1 = require("../data-access/cart.repository");
const layererror_handler_1 = require("../helpers/layererror.handler");
let CartServices = class CartServices {
    constructor(cartProductRepository, cartRepository) {
        this.cartProductRepository = cartProductRepository;
        this.cartRepository = cartRepository;
    }
    async addProduct(cartProduct) {
        try {
            return await this.cartProductRepository.create(cartProduct);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async deleteProduct(cart_id, product_id) {
        try {
            return await this.cartProductRepository.delete(cart_id, product_id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async updateProductQuantity(cart_id, product_id, newQuantity) {
        try {
            return await this.cartProductRepository.updateQuantity(cart_id, product_id, newQuantity);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getCartByUser(user_id) {
        try {
            return await this.cartRepository.getByUser(user_id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
};
exports.CartServices = CartServices;
exports.CartServices = CartServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(cartproduct_repository_1.CartProductRepository)),
    __param(1, (0, tsyringe_1.inject)(cart_repository_1.CartRepository)),
    __metadata("design:paramtypes", [cartproduct_repository_1.CartProductRepository,
        cart_repository_1.CartRepository])
], CartServices);
//# sourceMappingURL=cart.services.js.map