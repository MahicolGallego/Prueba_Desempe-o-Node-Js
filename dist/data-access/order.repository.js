"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const tsyringe_1 = require("tsyringe");
const order_model_1 = require("../models/order.model");
const layererror_handler_1 = require("../helpers/layererror.handler");
let OrderRepository = class OrderRepository {
    async create(order) {
        try {
            return await order_model_1.Order.create(order);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async delete(id) {
        try {
            return await order_model_1.Order.destroy({ where: { id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async update(id, order) {
        try {
            return await order_model_1.Order.update(order, { where: { id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findById(id) {
        try {
            return await order_model_1.Order.findByPk(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findAll() {
        try {
            return await order_model_1.Order.findAll();
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findAllByUser(id) {
        try {
            return await order_model_1.Order.findAll({
                where: { user_id: id },
            });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, tsyringe_1.injectable)()
], OrderRepository);
//# sourceMappingURL=order.repository.js.map