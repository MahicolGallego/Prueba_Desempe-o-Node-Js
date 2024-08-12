import { container } from 'tsyringe';
import { CartServices } from '../services/cart.services';
import { Request, Response } from 'express';
import { errorHandler } from '../helpers/error.handler';

export class CartController {
	static async addProduct(req: Request, res: Response) {
		try {
			const cartServices = container.resolve(CartServices);
			const newProduct = await cartServices.addProduct(req.body);
			res.status(201).json({
				status: 201,
				product_add: newProduct,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async deleteProduct(req: Request, res: Response) {
		try {
			const cartServices = container.resolve(CartServices);
			await cartServices.deleteProduct(
				parseInt(req.params.card_id),
				parseInt(req.params.product_id),
			);
			res.status(200).json({
				status: 200,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async updateProductQuantity(req: Request, res: Response) {
		try {
			const { quantity } = req.body;
			const cartServices = container.resolve(CartServices);
			await cartServices.updateProductQuantity(
				parseInt(req.params.card_id),
				parseInt(req.params.product_id),
				quantity,
			);
			res.status(214).json({
				status: 214,
				message: 'Product in cart successfully updated',
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}
}
