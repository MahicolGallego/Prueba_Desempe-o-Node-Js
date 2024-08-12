import { Request } from 'express';

export interface CustomRequest extends Request {
	body: {
		user?: any;
	};
}

export type Action = 'read' | 'create' | 'delete' | 'update' | 'readOne';
