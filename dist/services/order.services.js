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
exports.OrderServices = void 0;
const tsyringe_1 = require("tsyringe");
const order_repository_1 = require("../data-access/order.repository");
const layererror_handler_1 = require("../helpers/layererror.handler");
let OrderServices = class OrderServices {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async createOrder(order) {
        try {
            return await this.orderRepository.create(order);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async deleteOrder(id) {
        try {
            return await this.orderRepository.delete(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async updateOrder(id, order) {
        try {
            return await this.orderRepository.update(id, order);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getAllOrders() {
        try {
            return await this.orderRepository.findAll();
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getOrderById(id) {
        try {
            return await this.orderRepository.findById(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getOrdersByUser(id) {
        try {
            return await this.orderRepository.findAllByUser(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
};
exports.OrderServices = OrderServices;
exports.OrderServices = OrderServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(order_repository_1.OrderRepository)),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository])
], OrderServices);
//# sourceMappingURL=order.services.js.map