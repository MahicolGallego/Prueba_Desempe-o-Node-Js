"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const auth_router_1 = require("./auth.router");
const user_router_1 = require("./user.router");
const product_router_1 = require("./product.router");
const order_router_1 = require("./order.router");
const cart_router_1 = require("./cart.router");
exports.mainRouter = (0, express_1.Router)();
exports.mainRouter.use('/auth', auth_router_1.authRouter);
exports.mainRouter.use('/users', user_router_1.userRouter);
exports.mainRouter.use('/products', product_router_1.productRouter);
exports.mainRouter.use('/orders', order_router_1.orderRouter);
exports.mainRouter.use('/carts', cart_router_1.cartRouter);
//# sourceMappingURL=Router.js.map