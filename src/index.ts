import express, { Application } from 'express';
import dotenv from 'dotenv';
import { startServer } from './config/db';
import { errorHandler } from './middlewares/error.handler';
import { mainRouter } from './routes/Router';

const app: Application = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(errorHandler);
app.use('/api', mainRouter);

startServer(app, PORT);
