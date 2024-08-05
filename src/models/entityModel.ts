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

@Table({
	tableName: 'entities',
	timestamps: false,
})
export class Entity extends Model {
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
}
