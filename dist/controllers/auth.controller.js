"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tsyringe_1 = require("tsyringe");
const node_path_1 = require("node:path");
const user_services_1 = require("../services/user.services");
const error_handler_1 = require("../helpers/error.handler");
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Esta configuracion se debe realizar si el config()
//Nos presenta erorres fuera del index o archivo main
(0, dotenv_1.config)({ path: (0, node_path_1.resolve)(__dirname, '../../.env') });
class AuthController {
    static async registerNewUser(req, res) {
        try {
            const userServices = tsyringe_1.container.resolve(user_services_1.UserServices);
            const results = await userServices.createUser(req.body);
            if (!results) {
                // Manejo del caso en que el resultado es void
                return res.status(500).json({
                    status: 500,
                    message: 'Failed to create user',
                });
            }
            const { user, cart } = results;
            res.status(201).json({
                status: 201,
                user,
                cart,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const userServices = tsyringe_1.container.resolve(user_services_1.UserServices);
            const user = await userServices.checkCredentials(email, password);
            if (!user || !user.id || !(user === null || user === void 0 ? void 0 : user.role_id) || !user.cart_id) {
                return res.status(401).json({
                    status: 401,
                    message: 'Invalid credentials',
                });
            }
            const token = AuthController.generateToken({
                id: user.id,
                role_id: user.role_id,
                cart_id: user.cart_id,
            }, res);
            res.status(200).json({
                status: 200,
                token,
            });
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
    static generateToken(user, res) {
        try {
            const secret = process.env.JWT_SECRET;
            if (!secret)
                throw new Error('Please provide a JWT secret!');
            const token = jsonwebtoken_1.default.sign(user, secret, { expiresIn: '30m' });
            return token;
        }
        catch (error) {
            (0, error_handler_1.errorHandler)(res, error);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map