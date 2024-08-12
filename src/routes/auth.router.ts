import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export const authRouter: Router = Router();

authRouter.post('/register', AuthController.registerNewUser);
authRouter.post('/login', AuthController.login);
