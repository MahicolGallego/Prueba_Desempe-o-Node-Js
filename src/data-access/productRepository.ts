import { injectable } from 'tsyringe';
import { Product } from '../models/productModel';

@injectable()
export class ProductRepository {
	async create(product: Partial<Product>) {
		return await Product.create(product);
	}

	async delete(id: number) {
		return await Product.destroy({ where: { id } });
	}

	async update(id: number, product: Partial<Product>) {
		return await Product.update(product, { where: { id } });
	}

	async findById(id: number) {
		return await Product.findByPk(id);
	}

	async findAll() {
		return await Product.findAll();
	}
}
