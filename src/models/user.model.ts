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
	HasOne,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Cart } from './cart.model';
import { Order } from './order.model';

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
	declare email: string;

	@Column({
		type: DataType.STRING(200),
		allowNull: false,
	})
	declare password: string;

	@ForeignKey(() => Role)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare role_id: number;

	@BelongsTo(() => Role)
	role!: Role;

	@HasOne(() => Cart)
	cart?: Cart;

	@HasMany(() => Order)
	orders?: Order[];
}
