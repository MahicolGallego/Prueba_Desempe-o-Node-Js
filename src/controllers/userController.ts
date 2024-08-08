import { container } from 'tsyringe';
import { UserServices } from '../services/userServices';
import { Request, Response } from 'express';

export class UserController {
	static async createUser(req: Request, res: Response) {
		const userServices = container.resolve(UserServices);
		const user = await userServices.createUser(req.body);
		res.status(201).json({
			status: 201,
			user,
		});
	}

	static async deleteUser(req: Request, res: Response) {
		try {
			const userServices = container.resolve(UserServices);
			await userServices.deleteUser(parseInt(req.params.id));
			res.status(200).json({
				status: 200,
			});
		} catch (error: unknown) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
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
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
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
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
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
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}
}
