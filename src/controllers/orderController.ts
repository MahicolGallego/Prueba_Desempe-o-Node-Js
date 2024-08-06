import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { OrderServices } from '../services/orderServices';

export class OrderController {
	static async createOrder(req: Request, res: Response) {
		const orderServices = container.resolve(OrderServices);
		const order = await orderServices.createOrder(req.body);
		res.status(201).json({
			status: 201,
			order,
		});
	}

	static async deleteOrder(req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			await orderServices.deleteOrder(parseInt(req.params.id));
			res.status(200).json({
				status: 200,
			});
		} catch (error: unknown) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
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
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}

	static async getAllOrders(_req: Request, res: Response) {
		try {
			const orderServices = container.resolve(OrderServices);
			const allOrders = await orderServices.getAllOrders();
			res.status(200).json({
				status: 200,
				allOrders,
			});
		} catch (error) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
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
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
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
				allOrdersByUser,
			});
		} catch (error) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}
}
