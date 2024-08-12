import { inject, injectable } from 'tsyringe';
import { CartProduct } from '../models/cartsproducts.model';
import { CartProductRepository } from '../data-access/cartproduct.repository';
import { CartRepository } from '../data-access/cart.repository';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class CartServices {
	constructor(
		@inject(CartProductRepository)
		private cartProductRepository: CartProductRepository,
		@inject(CartRepository) private cartRepository: CartRepository,
	) {}

	async addProduct(cartProduct: Partial<CartProduct>) {
		try {
			return await this.cartProductRepository.create(cartProduct);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async deleteProduct(cart_id: number, product_id: number) {
		try {
			return await this.cartProductRepository.delete(cart_id, product_id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async updateProductQuantity(
		cart_id: number,
		product_id: number,
		newQuantity: number,
	) {
		try {
			return await this.cartProductRepository.updateQuantity(
				cart_id,
				product_id,
				newQuantity,
			);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}

	async getCartByUser(user_id: number) {
		try {
			return await this.cartRepository.getByUser(user_id);
		} catch (error) {
			layerErrorHandler('Services', error);
		}
	}
}
