import { container } from 'tsyringe';
import { resolve } from 'node:path';
import { UserServices } from '../services/user.services';
import { errorHandler } from '../helpers/error.handler';
import { Request, Response } from 'express';
import { Cart } from '../models/cart.model';
import { User } from '../models/user.model';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

//Esta configuracion se debe realizar si el config()
//Nos presenta erorres fuera del index o archivo main
config({ path: resolve(__dirname, '../../.env') });

export class AuthController {
	static async registerNewUser(
		req: Request,
		res: Response,
	): Promise<Response | undefined> {
		try {
			const userServices = container.resolve(UserServices);
			const results = await userServices.createUser(req.body);
			if (!results) {
				// Manejo del caso en que el resultado es void
				return res.status(500).json({
					status: 500,
					message: 'Failed to create user',
				});
			}
			const { user, cart }: { user: User; cart: string | Cart } = results;
			res.status(201).json({
				status: 201,
				user,
				cart,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;
			const userServices = container.resolve(UserServices);
			const user = await userServices.checkCredentials(email, password);

			if (!user || !user.id || !user?.role_id || !user.cart_id) {
				console.log('Finally', user);
				return res.status(401).json({
					status: 401,
					message: 'Invalid credentials',
				});
			}

			const token = AuthController.generateToken(
				{
					id: user.id,
					role_id: user.role_id,
					cart_id: user.cart_id,
				},
				res,
			);

			res.status(200).json({
				status: 200,
				token,
			});
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}

	static generateToken(
		user: {
			id: number;
			role_id: number;
			cart_id: number;
		},
		res: Response,
	): any {
		try {
			const secret = process.env.JWT_SECRET;
			if (!secret) throw new Error('Please provide a JWT secret!');
			const token = jwt.sign(user, secret, { expiresIn: '30m' });
			return token;
		} catch (error) {
			errorHandler(res, error as Error);
		}
	}
}
