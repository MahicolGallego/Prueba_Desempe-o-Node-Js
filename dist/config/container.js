"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const user_repository_1 = require("../data-access/user.repository");
const user_services_1 = require("../services/user.services");
const product_services_1 = require("../services/product.services");
const order_services_1 = require("../services/order.services");
const product_repository_1 = require("../data-access/product.repository");
const order_repository_1 = require("../data-access/order.repository");
const cart_services_1 = require("../services/cart.services");
const cart_repository_1 = require("../data-access/cart.repository");
// import { UserController } from '../controllers/userController';
tsyringe_1.container.registerSingleton(user_repository_1.UserRepository);
tsyringe_1.container.registerSingleton(user_services_1.UserServices);
// container.registerSingleton<UserController>(UserController);
tsyringe_1.container.registerSingleton(product_repository_1.ProductRepository);
tsyringe_1.container.registerSingleton(product_services_1.ProductServices);
tsyringe_1.container.registerSingleton(order_services_1.OrderServices);
tsyringe_1.container.registerSingleton(order_repository_1.OrderRepository);
tsyringe_1.container.registerSingleton(cart_services_1.CartServices);
tsyringe_1.container.registerSingleton(cart_repository_1.CartRepository);
//# sourceMappingURL=container.js.map