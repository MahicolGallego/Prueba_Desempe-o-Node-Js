"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = require("../models/user.model");
const role_model_1 = require("../models/role.model");
const cart_model_1 = require("../models/cart.model");
const entity_model_1 = require("../models/entity.model");
const order_model_1 = require("../models/order.model");
const cartsproducts_model_1 = require("../models/cartsproducts.model");
const product_model_1 = require("../models/product.model");
const permission_model_1 = require("../models/permission.model");
const ordersproducts_model_1 = require("../models/ordersproducts.model");
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [
        user_model_1.User,
        role_model_1.Role,
        product_model_1.Product,
        cart_model_1.Cart,
        entity_model_1.Entity,
        order_model_1.Order,
        cartsproducts_model_1.CartProduct,
        permission_model_1.Permission,
        ordersproducts_model_1.OrderProduct,
    ],
});
async function startServer(app, PORT) {
    // console.log(process.env.DB_HOST);
    // console.log(process.env.DB_USER);
    // console.log(process.env.DB_PASSWORD);
    // console.log(process.env.DB_NAME);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed the connection to Database', error);
    }
}
//# sourceMappingURL=db.js.map