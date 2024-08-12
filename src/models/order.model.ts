import {
	AutoIncrement,
	Column,
	DataType,
	Model,
	PrimaryKey,
	Table,
	ForeignKey,
	BelongsTo,
	HasMany,
} from 'sequelize-typescript';
import { User } from './user.model';
import { OrderProduct } from './ordersproducts.model';

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

	@Column({
		type: DataType.DECIMAL(10, 2),
		allowNull: false,
		validate: {
			min: 0.01, // Precio mínimo permitido
		},
	})
	total!: number;

	@BelongsTo(() => User)
	user!: User;

	@HasMany(() => OrderProduct)
	orders_products!: OrderProduct[];
}
