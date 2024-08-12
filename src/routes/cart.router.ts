import { Router } from 'express';
import { CartController } from '../controllers/cart.controller';

export const cartRouter: Router = Router();

cartRouter.post('/products', CartController.addProduct);
cartRouter.delete('/products', CartController.deleteProduct);
cartRouter.put(
	'/:product_id/products/stock',
	CartController.updateProductQuantity,
);
