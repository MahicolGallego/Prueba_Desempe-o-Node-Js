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
} from 'sequelize-typescript';
import { Cart } from './cart.model';
import { Product } from './product.model';

@Table({
	tableName: 'carts_products',
	timestamps: false,
})
export class CartProduct extends Model {
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

	@Column({
		type: DataType.CHAR(1),
		allowNull: false,
		validate: {
			is: {
				args: /^[aco]$/,
				msg: 'The value must be one of the following: a, c, or o',
			},
			length: {
				args: [1, 1],
				msg: 'The value must have exactly one character',
			},
		},
	})
	status!: string;

	@BelongsTo(() => Product)
	product!: Product;

	@BelongsTo(() => Cart)
	cart!: Cart;
}
