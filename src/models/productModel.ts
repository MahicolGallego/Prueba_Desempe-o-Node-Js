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
import { ProductCart } from './productcartModel';

@Table({
	tableName: 'products',
	timestamps: false,
})
export class Product extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@Column({
		type: DataType.STRING(200),
		allowNull: false,
	})
	name!: string;

	@Column({
		type: DataType.DECIMAL(10, 2),
		allowNull: false,
	})
	price!: number;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	description!: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	stock!: number;

	@HasMany(() => ProductCart)
	productCarts!: ProductCart[];
}
