import { container } from 'tsyringe';
import { UserRepository } from '../data-access/userRepository';
import { UserServices } from '../services/userServices';
import { ProductServices } from '../services/productServices';
import { OrderServices } from '../services/orderServices';
import { ProductRepository } from '../data-access/productRepository';
import { OrderRepository } from '../data-access/orderRepository';
// import { UserController } from '../controllers/userController';

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserServices>(UserServices);
// container.registerSingleton<UserController>(UserController);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductServices>(ProductServices);

container.registerSingleton<OrderServices>(OrderServices);
container.registerSingleton<OrderRepository>(OrderRepository);
