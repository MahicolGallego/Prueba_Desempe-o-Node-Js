import { Request, Response } from 'express';
import { mapErrorToResponse } from './errormapping';

export const errorHandler = (res: Response, error: Error) => {
	const { status_code, message }: { status_code: number; message: string } =
		mapErrorToResponse(error);
	return res.status(status_code).json({ status: status_code, message });
};
