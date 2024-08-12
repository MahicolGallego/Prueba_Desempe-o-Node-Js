"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const user_services_1 = require("../services/user.services");
const error_handler_1 = require("../helpers/error.handler");
class UserController {
    static async deleteUser(req, res) {
        try {
            const userServices = tsyringe_1.container.resolve(user_services_1.UserServices);
            await userServices.deleteUser(parseInt(req.params.id));
            res.status(200).json({
                status: 200,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async updateUser(req, res) {
        try {
            const userServices = tsyringe_1.container.resolve(user_services_1.UserServices);
            await userServices.updateUser(parseInt(req.params.id), req.body);
            res.status(214).json({
                status: 214,
                message: 'User successfully updated',
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getAllUsers(_req, res) {
        try {
            const userServices = tsyringe_1.container.resolve(user_services_1.UserServices);
            const allUsers = await userServices.getAllUsers();
            res.status(200).json({
                status: 200,
                users: allUsers,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async getUserById(req, res) {
        try {
            const userServices = tsyringe_1.container.resolve(user_services_1.UserServices);
            const user = await userServices.getUserById(parseInt(req.params.id));
            res.status(302).json({
                status: 302,
                user,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map