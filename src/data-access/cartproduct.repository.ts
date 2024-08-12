import { injectable } from 'tsyringe';
import { CartProduct } from '../models/cartsproducts.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

@injectable()
export class CartProductRepository {
	async create(cartProduct: Partial<CartProduct>) {
		try {
			return await CartProduct.create(cartProduct);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async delete(cart_id: number, product_id: number) {
		try {
			return await CartProduct.destroy({ where: { cart_id, product_id } });
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async updateQuantity(
		cart_id: number,
		product_id: number,
		newQuantity: number,
	) {
		try {
			return await CartProduct.update(
				{ quantity: newQuantity },
				{ where: { cart_id, product_id } },
			);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}
}
