import {
	AutoIncrement,
	Column,
	DataType,
	Model,
	PrimaryKey,
	Table,
	HasMany,
	ForeignKey,
	BelongsTo,
	HasOne,
} from 'sequelize-typescript';
import { User } from './userModel';
import { ProductCart } from './productcartModel';

@Table({
	tableName: 'orders',
	timestamps: false,
})
export class Order extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	user_id!: number;

	@ForeignKey(() => ProductCart)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	product_cart_id!: number;

	@Column({
		type: DataType.DECIMAL(10, 4),
		allowNull: false,
	})
	total!: number;

	@BelongsTo(() => User)
	user!: User;

	@BelongsTo(() => ProductCart)
	productCart!: ProductCart;
}
