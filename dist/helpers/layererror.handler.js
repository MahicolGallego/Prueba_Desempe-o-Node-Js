"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layerErrorHandler = void 0;
const layerErrorHandler = (layout, error) => {
    if (error instanceof Error) {
        throw new Error(`${layout} error: ${error.message}`);
    }
    else {
        throw new Error(`Unknown error: ${error.message}`);
    }
};
exports.layerErrorHandler = layerErrorHandler;
//# sourceMappingURL=layererror.handler.js.map