import {
	AutoIncrement,
	Column,
	DataType,
	Model,
	PrimaryKey,
	Table,
	ForeignKey,
	BelongsTo,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Entity } from './entity.model';

@Table({
	tableName: 'permissions',
	timestamps: false,
})
export class Permission extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	declare id: number;

	@ForeignKey(() => Role)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	role_id!: number;

	@ForeignKey(() => Entity)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	entity_id!: number;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	can_create!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	can_update!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	can_delete!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	can_get!: boolean;

	@Column({
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	can_getone!: boolean;

	@BelongsTo(() => Role)
	role!: Role;

	@BelongsTo(() => Entity)
	entity!: Entity;
}
