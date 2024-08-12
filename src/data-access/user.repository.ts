import { injectable } from 'tsyringe';
import { User } from '../models/user.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class UserRepository {
	async create(user: Partial<User>) {
		try {
			return await User.create(user);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async delete(id: number) {
		try {
			return await User.destroy({ where: { id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async update(id: number, user: Partial<User>) {
		try {
			return await User.update(user, { where: { id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findById(id: number) {
		try {
			return await User.findByPk(id);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findAll() {
		try {
			return await User.findAll();
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findByEmail(email: string) {
		try {
			return await User.findOne({
				where: {
					email,
				},
			});
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}
}
