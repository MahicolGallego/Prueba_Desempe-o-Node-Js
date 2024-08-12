"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWhitelist = exports.deleteWhitelist = exports.updateWhitelist = exports.getWhitelist = exports.createWhitelist = void 0;
exports.createCorsOptions = createCorsOptions;
function createCorsOptions(whitelist, credentials = false, optionsSuccessStatus = 204) {
    return {
        origin: function (origin, callback) {
            if (!origin || whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: credentials,
        optionsSuccessStatus: optionsSuccessStatus,
    };
}
exports.createWhitelist = [];
exports.getWhitelist = [];
exports.updateWhitelist = [];
exports.deleteWhitelist = [];
exports.postWhitelist = [];
//# sourceMappingURL=createopt.cors.js.map