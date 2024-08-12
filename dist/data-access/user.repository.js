"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tsyringe_1 = require("tsyringe");
const user_model_1 = require("../models/user.model");
const layererror_handler_1 = require("../helpers/layererror.handler");
let UserRepository = class UserRepository {
    async create(user) {
        try {
            return await user_model_1.User.create(user);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async delete(id) {
        try {
            return await user_model_1.User.destroy({ where: { id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async update(id, user) {
        try {
            return await user_model_1.User.update(user, { where: { id } });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findById(id) {
        try {
            return await user_model_1.User.findByPk(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findAll() {
        try {
            return await user_model_1.User.findAll();
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
    async findByEmail(email) {
        try {
            return await user_model_1.User.findOne({
                where: {
                    email,
                },
            });
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Repository', error);
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], UserRepository);
//# sourceMappingURL=user.repository.js.map