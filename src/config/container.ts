import { container } from 'tsyringe';
import { UserRepository } from '../data-access/user.repository';
import { UserServices } from '../services/user.services';
import { ProductServices } from '../services/product.services';
import { OrderServices } from '../services/order.services';
import { ProductRepository } from '../data-access/product.repository';
import { OrderRepository } from '../data-access/order.repository';
import { CartServices } from '../services/cart.services';
import { CartRepository } from '../data-access/cart.repository';
// import { UserController } from '../controllers/userController';

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserServices>(UserServices);
// container.registerSingleton<UserController>(UserController);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductServices>(ProductServices);

container.registerSingleton<OrderServices>(OrderServices);
container.registerSingleton<OrderRepository>(OrderRepository);

container.registerSingleton<CartServices>(CartServices);
container.registerSingleton<CartRepository>(CartRepository);
