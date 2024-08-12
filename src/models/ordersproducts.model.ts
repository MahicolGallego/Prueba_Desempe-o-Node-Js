import {
	AutoIncrement,
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
} from 'sequelize-typescript';
import { Product } from './product.model';
import { Order } from './order.model';

@Table({
	tableName: 'orders_products',
	timestamps: true,
})
export class OrderProduct extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@ForeignKey(() => Order)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	order_id!: number;

	@ForeignKey(() => Product)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	product_id!: number;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
		},
	})
	quantity!: number;

	@BelongsTo(() => Order)
	order!: Order;

	@BelongsTo(() => Product)
	product!: Product;
}
