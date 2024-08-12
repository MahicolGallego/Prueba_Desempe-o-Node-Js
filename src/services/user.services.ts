import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../data-access/user.repository';
import { User } from '../models/user.model';
import { layerErrorHandler } from '../helpers/layererror.handler';
import bcrypt from 'bcrypt';
import { Cart } from '../models/cart.model';
import { CartRepository } from '../data-access/cart.repository';
import { UserWithCart } from '../interfaces/userwithcart.interface';

@injectable()
export class UserServices {
	constructor(
		@inject(UserRepository) private userRepository: UserRepository,
		@inject(CartRepository) private cartRepository: CartRepository,
	) {}

	async checkCredentials(
		email: string,
		password: string,
	): Promise<UserWithCart | undefined> {
		try {
			const user = await this.userRepository.findByEmail(email);
			if (!user) {
				throw new Error('Invalid credentials');
			}
			console.log(user.password);
			console.log(user.email);
			console.log(user.id);
			console.log(user.role_id);
			const passwordValidate = await bcrypt.compare(password, user.password);
			if (!passwordValidate) throw new Error('Invalid credentials');
			const userCart = await this.cartRepository.getByUser(user.id);
			if (!userCart) throw new Error('Invalid credentials by cart not found');
			const userWithCart = {
				id: user.id,
				role_id: user.role_id,
				cart_id: userCart.id,
			};
			console.log('user - cart:  ', userWithCart);
			return userWithCart;
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async createUser(
		user: Partial<User>,
	): Promise<{ user: User; cart: Cart | string } | void> {
		try {
			if (!user.password) throw new Error('Password is required');
			const numberHash: number = 20;
			user.password = await bcrypt.hash(user.password, numberHash);
			const createdUser = await this.userRepository.create(user);
			if (!createdUser) throw new Error('User not created');
			const createdCart = await this.cartRepository.create({
				user_id: createdUser.id,
			});
			return {
				user: createdUser,
				cart: createdCart ? createdCart : 'Cart of user not created',
			};
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async deleteUser(id: number) {
		try {
			return await this.userRepository.delete(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async updateUser(id: number, user: Partial<User>) {
		try {
			return await this.userRepository.update(id, user);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getAllUsers() {
		try {
			return await this.userRepository.findAll();
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getUserById(id: number) {
		try {
			return await this.userRepository.findById(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}
}
