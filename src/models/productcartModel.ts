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
import { Cart } from './cartModel';
import { Product } from './productModel';
import { Order } from './orderModel';

@Table({
	tableName: 'productcarts',
	timestamps: false,
})
export class ProductCart extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@ForeignKey(() => Cart)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	cart_id!: number;

	@ForeignKey(() => Product)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	product_id!: number;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	quantity!: number;

	@BelongsTo(() => Product)
	product!: Product;

	@BelongsTo(() => Cart)
	cart!: Cart;

	@HasMany(() => Order)
	orders!: Order[];
}
