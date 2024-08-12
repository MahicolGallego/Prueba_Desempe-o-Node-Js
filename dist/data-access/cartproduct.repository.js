"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProductRepository = void 0;
const tsyringe_1 = require("tsyringe");
const cartsproducts_model_1 = require("../models/cartsproducts.model");
const layererror_handler_1 = require("../helpers/layererror.handler");
let CartProductRepository = class CartProductRepository {
    async create(cartProduct) {
        try {
            return await cartsproducts_model_1.CartProduct.create(cartProduct);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async delete(cart_id, product_id) {
        try {
            return await cartsproducts_model_1.CartProduct.destroy({ where: { cart_id, product_id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async updateQuantity(cart_id, product_id, newQuantity) {
        try {
            return await cartsproducts_model_1.CartProduct.update({ quantity: newQuantity }, { where: { cart_id, product_id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
};
exports.CartProductRepository = CartProductRepository;
exports.CartProductRepository = CartProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], CartProductRepository);
//# sourceMappingURL=cartproduct.repository.js.map