type ErrorType =
	| 'Validation error'
	| 'Database error'
	| 'Not Found error'
	| 'Unauthorized error'
	| 'Forbidden error'
	| 'Conflict error'
	| 'Internal Server error';

const errorMapping: Record<
	ErrorType,
	{ status_code: number; message: string }
> = {
	'Validation error': { status_code: 400, message: 'Invalid input data' },
	'Database error': { status_code: 500, message: 'Database operation failed' },
	'Not Found error': { status_code: 404, message: 'Resource not found' },
	'Unauthorized error': {
		status_code: 401,
		message: 'Authentication required',
	},
	'Forbidden error': {
		status_code: 403,
		message: 'You do not have permission to access this resource',
	},
	'Conflict error': { status_code: 409, message: 'Resource conflict' },
	'Internal Server error': {
		status_code: 500,
		message: 'An unexpected error occurred',
	},
};

export const mapErrorToResponse = (error: Error) => {
	console.log(error.message);
	const errorKey = error.message.split(': ')[1] as ErrorType;
	const mappedError: { status_code: number; message: string } = {
		...errorMapping[errorKey],
	};

	if (!mappedError.message) {
		return {
			status_code: 500,
			message: `Error without handler ${error.message}`,
		};
	}

	return mappedError;
};
