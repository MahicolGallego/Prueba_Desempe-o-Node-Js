"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const error_handler_1 = require("./middlewares/error.handler");
const Router_1 = require("./routes/Router");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(error_handler_1.errorHandler);
app.use('/api', Router_1.mainRouter);
(0, db_1.startServer)(app, PORT);
//# sourceMappingURL=index.js.map