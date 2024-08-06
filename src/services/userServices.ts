import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../data-access/userRepository';
import { User } from '../models/userModel';

@injectable()
export class UserServices {
	constructor(@inject(UserRepository) private userRepository: UserRepository) {}

	async createUser(user: Partial<User>) {
		return await this.userRepository.create(user);
	}

	async deleteUser(id: number) {
		return await this.userRepository.delete(id);
	}

	async updateUser(id: number, user: Partial<User>) {
		return await this.userRepository.update(id, user);
	}

	async getAllUsers() {
		return await this.userRepository.findAll();
	}

	async getUserById(id: number) {
		return await this.userRepository.findById(id);
	}
}
