import { Router } from 'express';
import {
	createCorsOptions,
	deleteWhitelist,
	getWhitelist,
	postWhitelist,
	updateWhitelist,
} from '../helpers/createCorsOpt';

import cors from 'cors';
import { ProductController } from '../controllers/productController';

export const productRouter: Router = Router();

productRouter.get(
	'/',
	cors(createCorsOptions(getWhitelist)),
	ProductController.getAllProducts,
);

productRouter.get(
	'/:id',
	cors(createCorsOptions(getWhitelist)),
	ProductController.getProductById,
);

productRouter.post(
	'/',
	cors(createCorsOptions(postWhitelist)),
	ProductController.createProduct,
);

productRouter.put(
	'/:id',
	cors(createCorsOptions(updateWhitelist)),
	ProductController.updateProduct,
);

productRouter.delete(
	'/:id',
	cors(createCorsOptions(deleteWhitelist)),
	ProductController.deleteProduct,
);
