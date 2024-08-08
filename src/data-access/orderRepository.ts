import { injectable } from 'tsyringe';
import { Order } from '../models/orderModel';

@injectable()
export class OrderRepository {
	async create(order: Partial<Order>) {
		return await Order.create(order);
	}

	async delete(id: number) {
		return await Order.destroy({ where: { id } });
	}

	async update(id: number, order: Partial<Order>) {
		return await Order.update(order, { where: { id } });
	}

	async findById(id: number) {
		return await Order.findByPk(id);
	}

	async findAll() {
		return await Order.findAll();
	}

	async findAllByUser(id: number) {
		return await Order.findAll({
			where: { user_id: id },
		});
	}
}
