"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
exports.cartRouter = (0, express_1.Router)();
exports.cartRouter.post('/products', cart_controller_1.CartController.addProduct);
exports.cartRouter.delete('/products', cart_controller_1.CartController.deleteProduct);
exports.cartRouter.put('/:product_id/products/stock', cart_controller_1.CartController.updateProductQuantity);
//# sourceMappingURL=cart.router.js.map