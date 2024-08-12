import { Router } from 'express';
import {
	createCorsOptions,
	deleteWhitelist,
	getWhitelist,
	updateWhitelist,
} from '../helpers/createopt.cors';

import cors from 'cors';
import { UserController } from '../controllers/user.controller';

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
