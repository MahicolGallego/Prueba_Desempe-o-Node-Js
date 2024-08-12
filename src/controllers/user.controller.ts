import { container } from 'tsyringe';
import { UserServices } from '../services/user.services';
import { Request, Response } from 'express';
import { mapErrorToResponse } from '../helpers/errormapping';
import { errorHandler } from '../helpers/error.handler';

export class UserController {
	static async deleteUser(req: Request, res: Response) {
		try {
			const userServices = container.resolve(UserServices);
			await userServices.deleteUser(parseInt(req.params.id));
			res.status(200).json({
				status: 200,
			});
		} catch (error: unknown) {
			errorHandler(res, error as Error);
		}
	}

	static async updateUser(req: Request, res: Response) {
		try {
			const userServices = container.resolve(UserServices);
			await userServices.updateUser(parseInt(req.params.id), req.body);
			res.status(214).json({
				status: 214,
				message: 'User successfully updated',
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async getAllUsers(_req: Request, res: Response) {
		try {
			const userServices = container.resolve(UserServices);
			const allUsers = await userServices.getAllUsers();
			res.status(200).json({
				status: 200,
				users: allUsers,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async getUserById(req: Request, res: Response) {
		try {
			const userServices = container.resolve(UserServices);
			const user = await userServices.getUserById(parseInt(req.params.id));
			res.status(302).json({
				status: 302,
				user,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}
}
