"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapErrorToResponse = void 0;
const errorMapping = {
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
const mapErrorToResponse = (error) => {
    console.log(error.message);
    const errorKey = error.message.split(': ')[1];
    const mappedError = Object.assign({}, errorMapping[errorKey]);
    if (!mappedError.message) {
        return {
            status_code: 500,
            message: `Error without handler ${error.message}`,
        };
    }
    return mappedError;
};
exports.mapErrorToResponse = mapErrorToResponse;
//# sourceMappingURL=errormapping.js.map