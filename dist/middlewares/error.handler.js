"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, _req, res, _next) => {
    console.error(error.stack);
    res.status(500).json({ error: error.message, message: 'There is an error' });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map