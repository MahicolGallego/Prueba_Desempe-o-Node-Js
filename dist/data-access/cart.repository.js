"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const tsyringe_1 = require("tsyringe");
const cart_model_1 = require("../models/cart.model");
const layererror_handler_1 = require("../helpers/layererror.handler");
(0, tsyringe_1.injectable)();
class CartRepository {
    async create(cart) {
        try {
            return await cart_model_1.Cart.create(cart);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async getByUser(user_id) {
        try {
            return await cart_model_1.Cart.findOne({
                where: {
                    user_id,
                },
            });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
}
exports.CartRepository = CartRepository;
//# sourceMappingURL=cart.repository.js.map