import { inject, injectable } from 'tsyringe';
import { ProductRepository } from '../data-access/product.repository';
import { Product } from '../models/product.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class ProductServices {
	constructor(
		@inject(ProductRepository) private productRepository: ProductRepository,
	) {}

	async createProduct(product: Partial<Product>) {
		try {
			return await this.productRepository.create(product);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async deleteProduct(id: number) {
		try {
			return await this.productRepository.delete(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async updateProduct(id: number, product: Partial<Product>) {
		try {
			return await this.productRepository.update(id, product);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getAllProducts() {
		try {
			return await this.productRepository.findAll();
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getProductById(id: number) {
		try {
			return await this.productRepository.findById(id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}
}
