import { inject, injectable } from 'tsyringe';
import { OrderRepository } from '../data-access/order.repository';
import { Order } from '../models/order.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class OrderServices {
	constructor(
		@inject(OrderRepository) private orderRepository: OrderRepository,
	) {}

	async createOrder(order: Partial<Order>) {
		try {
			return await this.orderRepository.create(order);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async deleteOrder(id: number) {
		try {
			return await this.orderRepository.delete(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async updateOrder(id: number, order: Partial<Order>) {
		try {
			return await this.orderRepository.update(id, order);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getAllOrders() {
		try {
			return await this.orderRepository.findAll();
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getOrderById(id: number) {
		try {
			return await this.orderRepository.findById(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getOrdersByUser(id: number) {
		try {
			return await this.orderRepository.findAllByUser(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}
}
