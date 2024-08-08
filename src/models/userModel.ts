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
	Unique,
} from 'sequelize-typescript';
import { Role } from './roleModel';
import { Cart } from './cartModel';
import { Order } from './orderModel';

@Table({
	tableName: 'users',
	timestamps: false,
})
export class User extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@Unique
	@Column({
		type: DataType.STRING(200),
		allowNull: false,
	})
	email!: string;

	@Column({
		type: DataType.STRING(200),
		allowNull: false,
	})
	password!: string;

	@ForeignKey(() => Role)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	role_id!: number;

	@BelongsTo(() => Role)
	role!: Role;

	@HasMany(() => Cart)
	carts!: Cart[];

	@HasMany(() => Order)
	orders!: Order[];
}
