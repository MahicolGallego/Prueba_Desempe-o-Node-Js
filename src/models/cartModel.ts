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
import { User } from './userModel';
import { ProductCart } from './productcartModel';

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

	@ForeignKey(() => User)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	user_id!: number;

	@BelongsTo(() => User)
	user!: User;

	@HasMany(() => ProductCart)
	productCarts!: ProductCart[];
}
