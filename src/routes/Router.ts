import { Router } from 'express';
import { userRouter } from './userRouter';
import { productRouter } from './productRouter';
import { orderRouter } from './orderRouter';

export const mainRouter: Router = Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/products', productRouter);
mainRouter.use('/orders', orderRouter);
