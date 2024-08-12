import { injectable } from 'tsyringe';
import { Product } from '../models/product.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class ProductRepository {
	async create(product: Partial<Product>) {
		try {
			return await Product.create(product);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async delete(id: number) {
		try {
			return await Product.destroy({ where: { id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async update(id: number, product: Partial<Product>) {
		try {
			return await Product.update(product, { where: { id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findById(id: number) {
		try {
			return await Product.findByPk(id);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async findAll() {
		try {
			return await Product.findAll();
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}
}
