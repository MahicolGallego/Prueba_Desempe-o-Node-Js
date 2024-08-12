import { Router } from 'express';
import { authRouter } from './auth.router';
import { userRouter } from './user.router';
import { productRouter } from './product.router';
import { orderRouter } from './order.router';
import { cartRouter } from './cart.router';
import { authJWT } from '../middlewares/jwtVerity.middleware';

export const mainRouter: Router = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/users', authJWT, userRouter);
mainRouter.use('/products', authJWT, productRouter);
mainRouter.use('/orders', authJWT, orderRouter);
mainRouter.use('/carts', authJWT, cartRouter);
