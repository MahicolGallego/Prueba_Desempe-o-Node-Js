import { injectable } from 'tsyringe';
import { Cart } from '../models/cart.model';
import { layerErrorHandler } from '../helpers/layererror.handler';

injectable();
export class CartRepository {
	async create(cart: Partial<Cart>) {
		try {
			return await Cart.create(cart);
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}

	async getByUser(user_id: number) {
		try {
			return await Cart.findOne({
				where: {
					user_id,
				},
			});
		} catch (error) {
			layerErrorHandler('Repository', error);
		}
	}
}
