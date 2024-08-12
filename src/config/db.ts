import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Application } from 'express';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Cart } from '../models/cart.model';
import { Entity } from '../models/entity.model';
import { Order } from '../models/order.model';
import { CartProduct } from '../models/cartsproducts.model';
import { Product } from '../models/product.model';
import { Permission } from '../models/permission.model';
import { OrderProduct } from '../models/ordersproducts.model';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
	dialect: 'mysql',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	models: [
		User,
		Role,
		Product,
		Cart,
		Entity,
		Order,
		CartProduct,
		Permission,
		OrderProduct,
	],
});

export async function startServer(app: Application, PORT: any) {
	// console.log(process.env.DB_HOST);
	// console.log(process.env.DB_USER);
	// console.log(process.env.DB_PASSWORD);
	// console.log(process.env.DB_NAME);
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		await sequelize.sync({ alter: true });
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error: unknown) {
		console.error('Failed the connection to Database', error);
	}
}
