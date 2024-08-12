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
import { User } from './user.model';
import { CartProduct } from './cartsproducts.model';

@Table({
	tableName: 'carts',
	timestamps: false,
})
export class Cart extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@Unique
	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare user_id: number;

	@BelongsTo(() => User)
	user!: User;

	@HasMany(() => CartProduct)
	carts_products!: CartProduct[];
}
