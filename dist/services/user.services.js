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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const tsyringe_1 = require("tsyringe");
const user_repository_1 = require("../data-access/user.repository");
const layererror_handler_1 = require("../helpers/layererror.handler");
const bcrypt_1 = __importDefault(require("bcrypt"));
const cart_repository_1 = require("../data-access/cart.repository");
let UserServices = class UserServices {
    constructor(userRepository, cartRepository) {
        this.userRepository = userRepository;
        this.cartRepository = cartRepository;
    }
    async checkCredentials(email, password) {
        try {
            const user = await this.userRepository.findByEmail(email);
            console.log(user);
            if (!user) {
                throw new Error('Invalid credentials');
            }
            const passwordValidate = await bcrypt_1.default.compare(password, user.password);
            if (!passwordValidate)
                throw new Error('Invalid credentials');
            const userCart = await this.cartRepository.getByUser(user.id);
            if (!userCart)
                throw new Error('Invalid credentials by cart not found');
            const userWithCart = Object.assign(Object.assign({}, userCart), { cart_id: userCart.id });
            return userWithCart;
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async createUser(user) {
        try {
            if (!user.password)
                throw new Error('Password is required');
            const numberHash = 20;
            user.password = await bcrypt_1.default.hash(user.password, numberHash);
            const createdUser = await this.userRepository.create(user);
            if (!createdUser)
                throw new Error('User not created');
            const createdCart = await this.cartRepository.create({
                user_id: createdUser.id,
            });
            return {
                user: createdUser,
                cart: createdCart ? createdCart : 'Cart of user not created',
            };
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async deleteUser(id) {
        try {
            return await this.userRepository.delete(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async updateUser(id, user) {
        try {
            return await this.userRepository.update(id, user);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getAllUsers() {
        try {
            return await this.userRepository.findAll();
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
    async getUserById(id) {
        try {
            return await this.userRepository.findById(id);
        }
        catch (error) {
            (0, layererror_handler_1.layerErrorHandler)('Services', error);
        }
    }
};
exports.UserServices = UserServices;
exports.UserServices = UserServices = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(user_repository_1.UserRepository)),
    __param(1, (0, tsyringe_1.inject)(cart_repository_1.CartRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        cart_repository_1.CartRepository])
], UserServices);
//# sourceMappingURL=user.services.js.map