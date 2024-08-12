import { User } from '../models/user.model';

export interface UserWithCart extends Partial<User> {
	cart_id?: number;
}
