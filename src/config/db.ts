import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Application } from 'express';
import { User } from '../models/userModel';
import { Role } from '../models/roleModel';
import { Cart } from '../models/cartModel';
import { Entity } from '../models/entityModel';
import { Order } from '../models/orderModel';
import { ProductCart } from '../models/productcartModel';
import { Product } from '../models/productModel';
import { Permission } from '../models/permissionModel';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
	dialect: 'mysql',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	models: [User, Role, Product, Cart, Entity, Order, ProductCart, Permission],
});

export async function startServer(app: Application, PORT: any) {
	// console.log(process.env.DB_HOST);
	// console.log(process.env.DB_USER);
	// console.log(process.env.DB_PASSWORD);
	// console.log(process.env.DB_NAME);
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error: unknown) {
		console.error('Failed the connection to Database', error);
	}
}
