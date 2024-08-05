import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Application } from 'express';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
	dialect: 'mysql',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	models: [],
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
