import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ProductServices } from '../services/productServices';

export class ProductController {
	static async createProduct(req: Request, res: Response) {
		const productServices = container.resolve(ProductServices);
		const user = await productServices.createProduct(req.body);
		res.status(201).json({
			status: 201,
			user,
		});
	}

	static async deleteProduct(req: Request, res: Response) {
		try {
			const productServices = container.resolve(ProductServices);
			await productServices.deleteProduct(parseInt(req.params.id));
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

	static async updateProduct(req: Request, res: Response) {
		try {
			const productServices = container.resolve(ProductServices);
			await productServices.updateProduct(parseInt(req.params.id), req.body);
			res.status(214).json({
				status: 214,
				message: 'Product successfully updated',
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

	static async getAllProducts(_req: Request, res: Response) {
		try {
			const productServices = container.resolve(ProductServices);
			const allProducts = await productServices.getAllProducts();
			res.status(200).json({
				status: 200,
				products: allProducts,
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

	static async getProductById(req: Request, res: Response) {
		try {
			const productServices = container.resolve(ProductServices);
			const product = await productServices.getProductById(
				parseInt(req.params.id),
			);
			res.status(302).json({
				status: 302,
				product,
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
