// import { FieldPacket } from 'mysql2';
import { UserLoggedEntity } from '../types';
import { pool } from '../utils/db';

// type UserResults = [UserLoggedEntity[], FieldPacket[]]
export class UserLogged implements UserLoggedEntity {
	public id:string;

	public username: string;

	constructor(id:string, username:string) {
		this.id = id;
		this.username = username;
	}
	/*
	static async getOne(id:string):Promise<UserLoggedEntity |null> {
		const [results,] = await pool.execute('SELECT * FROM `users_logged` WHERE id = :id', {
			id,
		}) as UserResults;

		return results.length === 0 ? null : new UserLogged(results[0]);
	}
    */

	async insert(): Promise<void> {
		await pool.execute('INSERT INTO `users_logged`(`id`, `username`) VALUES(:id, :username)', this);
	}

	static async delete(id:string) {
		await pool.execute('DELETE FROM `users_logged` WHERE id =?', [id,]);
	}
}
