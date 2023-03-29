import { FieldPacket } from 'mysql2';
import { v4 as uuid } from 'uuid';
import { pool } from '../utils/db';
import { UserEntity } from '../types/user';
import { ValidationError } from '../utils/error';

type UserResults = [UserEntity[], FieldPacket[]]

export class User implements UserEntity {
	public id?: string;

	public username: string;

	public email: string;

	public password: string;

	constructor(obj:any) {
		if (!obj.username || obj.length > 34) {
			throw new ValidationError('Username not exist or too long max length is 34');
		}

		this.id = obj.id;
		this.username = obj.username;
		this.email = obj.email;
		this.password = obj.password;
	}

	static async getOne(id:string):Promise<UserEntity |null> {
		const [results,] = await pool.execute('SELECT * FROM `users` WHERE id = :id', {
			id,
		}) as UserResults;

		return results.length === 0 ? null : new User(results[0]);
	}

	async insert(): Promise<void> {
		if (!this.id) {
			this.id = uuid();
		} else {
			throw new Error('Cannot insert something that is already inserted!');
		}

		await pool.execute('INSERT INTO `users`(`id`, `username`, `email`, `password`) VALUES(:id, :username, :email, :password)', this);
	}
}
