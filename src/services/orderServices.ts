import { inject, injectable } from 'tsyringe';
import { OrderRepository } from '../data-access/orderRepository';
import { Order } from '../models/orderModel';

@injectable()
export class OrderServices {
	constructor(
		@inject(OrderRepository) private orderRepository: OrderRepository,
	) {}

	async createOrder(order: Partial<Order>) {
		return await this.orderRepository.create(order);
	}

	async deleteOrder(id: number) {
		return await this.orderRepository.delete(id);
	}

	async updateOrder(id: number, order: Partial<Order>) {
		return await this.orderRepository.update(id, order);
	}

	async getAllOrders() {
		return await this.orderRepository.findAll();
	}

	async getOrderById(id: number) {
		return await this.orderRepository.findById(id);
	}

	async getOrdersByUser(id: number) {
		return await this.orderRepository.findAllByUser(id);
	}
}
