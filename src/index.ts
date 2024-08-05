import express, { Application } from 'express';
import dotenv from 'dotenv';
import { startServer } from './config/db';

const app: Application = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

startServer(app, PORT);
