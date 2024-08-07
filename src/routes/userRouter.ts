import { Router } from 'express';
import {
	createCorsOptions,
	deleteWhitelist,
	getWhitelist,
	postWhitelist,
	updateWhitelist,
} from '../helpers/createCorsOpt';

import cors from 'cors';
import { UserController } from '../controllers/userController';

export const userRouter: Router = Router();

userRouter.get(
	'/',
	cors(createCorsOptions(getWhitelist)),
	UserController.getAllUsers,
);

userRouter.get(
	'/:id',
	cors(createCorsOptions(getWhitelist)),
	UserController.getUserById,
);

userRouter.post(
	'/',
	cors(createCorsOptions(postWhitelist)),
	UserController.createUser,
);

userRouter.put(
	'/:id',
	cors(createCorsOptions(updateWhitelist)),
	UserController.updateUser,
);

userRouter.delete(
	'/:id',
	cors(createCorsOptions(deleteWhitelist)),
	UserController.deleteUser,
);
