import { Router } from 'express';

import {
	createCorsOptions,
	deleteWhitelist,
	getWhitelist,
	postWhitelist,
	updateWhitelist,
} from '../helpers/createopt.cors';

import cors from 'cors';
import { OrderController } from '../controllers/order.controller';

export const orderRouter: Router = Router();

orderRouter.get(
	'/',
	cors(createCorsOptions(getWhitelist)),
	OrderController.getAllOrders,
);

orderRouter.get(
	'/:id',
	cors(createCorsOptions(getWhitelist)),
	OrderController.getOrderById,
);

orderRouter.get(
	'/:id/user',
	cors(createCorsOptions(getWhitelist)),
	OrderController.getOrdersByUser,
);

orderRouter.post(
	'/',
	cors(createCorsOptions(postWhitelist)),
	OrderController.createOrder,
);

orderRouter.put(
	'/:id',
	cors(createCorsOptions(updateWhitelist)),
	OrderController.updateOrder,
);

orderRouter.delete(
	'/:id',
	cors(createCorsOptions(deleteWhitelist)),
	OrderController.deleteOrder,
);
