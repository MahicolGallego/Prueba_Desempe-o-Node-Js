import {
	AutoIncrement,
	Column,
	DataType,
	Model,
	PrimaryKey,
	Table,
	HasMany,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({
	tableName: 'roles',
	timestamps: false,
})
export class Role extends Model {
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

	@HasMany(() => User)
	users!: User[];
}
