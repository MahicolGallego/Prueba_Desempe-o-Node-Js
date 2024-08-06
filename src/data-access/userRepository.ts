import { injectable } from 'tsyringe';
import { User } from '../models/userModel';

@injectable()
export class UserRepository {
	async create(user: Partial<User>) {
		return await User.create(user);
	}

	async delete(id: number) {
		return await User.destroy({ where: { id } });
	}

	async update(id: number, user: Partial<User>) {
		return await User.update(user, { where: { id } });
	}

	async findById(id: number) {
		return await User.findByPk(id);
	}

	async findAll() {
		return await User.findAll();
	}
}
