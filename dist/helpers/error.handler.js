"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errormapping_1 = require("./errormapping");
const errorHandler = (res, error) => {
    const { status_code, message } = (0, errormapping_1.mapErrorToResponse)(error);
    return res.status(status_code).json({ status: status_code, message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map