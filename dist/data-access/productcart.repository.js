"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const tsyringe_1 = require("tsyringe");
const cartsproducts_model_1 = require("../models/cartsproducts.model");
let CartRepository = class CartRepository {
    async create(cartProduct) {
        return await cartsproducts_model_1.CartProduct.create(cartProduct);
    }
    async delete(cart_id, product_id) {
        return await cartsproducts_model_1.CartProduct.destroy({ where: { cart_id, product_id } });
    }
    async updateQuantity(cart_id, product_id, newQuantity) {
        return await cartsproducts_model_1.CartProduct.update({ quantity: newQuantity }, { where: { cart_id, product_id } });
    }
};
exports.CartRepository = CartRepository;
exports.CartRepository = CartRepository = __decorate([
    (0, tsyringe_1.injectable)()
], CartRepository);
//# sourceMappingURL=productcart.repository.js.map