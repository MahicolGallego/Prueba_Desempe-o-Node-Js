import { inject, injectable } from 'tsyringe';
import { ProductRepository } from '../data-access/productRepository';
import { Product } from '../models/productModel';

@injectable()
export class ProductServices {
	constructor(
		@inject(ProductRepository) private productRepository: ProductRepository,
	) {}

	async createProduct(product: Partial<Product>) {
		return await this.productRepository.create(product);
	}

	async deleteProduct(id: number) {
		return await this.productRepository.delete(id);
	}

	async updateProduct(id: number, product: Partial<Product>) {
		return await this.productRepository.update(id, product);
	}

	async getAllProducts() {
		return await this.productRepository.findAll();
	}

	async getProductById(id: number) {
		return await this.productRepository.findById(id);
	}
}
