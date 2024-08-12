import { injectable } from 'tsyringe';
import { Order } from '../models/order.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class OrderRepository {
	async create(order: Partial<Order>) {
		try {
			return await Order.create(order);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async delete(id: number) {
		try {
			return await Order.destroy({ where: { id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async update(id: number, order: Partial<Order>) {
		try {
			return await Order.update(order, { where: { id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findById(id: number) {
		try {
			return await Order.findByPk(id);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findAll() {
		try {
			return await Order.findAll();
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findAllByUser(id: number) {
		try {
			return await Order.findAll({
				where: { user_id: id },
			});
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}
}
