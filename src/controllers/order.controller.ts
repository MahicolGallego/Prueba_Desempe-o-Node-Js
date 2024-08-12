import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { OrderServices } from '../services/order.services';
import { errorHandler } from '../helpers/error.handler';

export class OrderController {
	static async createOrder(req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			const order = await orderServices.createOrder(req.body);
			res.status(201).json({
				status: 201,
				order,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async deleteOrder(req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			await orderServices.deleteOrder(parseInt(req.params.id));
			res.status(200).json({
				status: 200,
			});
		} catch (error: unknown) {
			errorHandler(res, error as Error);
		}
	}

	static async updateOrder(req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			await orderServices.updateOrder(parseInt(req.params.id), req.body);
			res.status(214).json({
				status: 214,
				message: 'Order successfully updated',
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async getAllOrders(_req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			const allOrders = await orderServices.getAllOrders();
			res.status(200).json({
				status: 200,
				orders: allOrders,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async getOrderById(req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			const order = await orderServices.getOrderById(parseInt(req.params.id));
			res.status(302).json({
				status: 302,
				order,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async getOrdersByUser(req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			const allOrdersByUser = await orderServices.getOrdersByUser(
				parseInt(req.params.id),
			);

			res.status(302).json({
				status: 302,
				orders: allOrdersByUser,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}
}
