import { config } from 'dotenv';
import { CustomRequest } from '../helpers/types.helper';
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

config();

export const authJWT = (
	req: CustomRequest,
	res: Response,
	next: NextFunction,
) => {
	const authHeader: string | undefined = req.headers.authorization;
	if (!authHeader)
		return res.status(403).json({
			status: 403,
			message: 'Token not provided',
		});

	const token: string = authHeader.split(' ')[1];
	const secret: string | undefined = process.env.JWT_SECRET;

	if (!secret)
		return res.status(403).json({
			status: 403,
			message: 'JWT secret not provided',
		});

	jwt.verify(token, secret, (error, user) => {
		if (error)
			return res.status(401).json({
				status: 401,
				message: 'Invalid token',
			});

		req.body.user = user;
		next();
	});
};
