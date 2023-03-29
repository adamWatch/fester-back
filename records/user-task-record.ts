// import { FieldPacket } from 'mysql2';
// import { pool } from '../utils/db';
import { UserTaskEntity } from '../types/user';
// import { ValidationError } from '../utils/error';

export class UserTask implements UserTaskEntity {
	public id: string;

	public username: string;

	public allExp: number;

	public workoutExp: number;

	public learningExp: number;

	public nutritionExp: number;

	public recreationExp: number;

	public hobbyExp: number;

	public workoutTask: JSON;

	public learningTask: JSON;

	public nutritionTask: JSON;

	public recreationTask: JSON;

	public hobbyTask: JSON;

	constructor(obj:any) {
		this.id = obj.id;
		this.username = obj.username;
		this.allExp = obj.allExp;
		this.workoutExp = obj.workoutExp;
		this.learningExp = obj.learningExp;
		this.nutritionExp = obj.nutritionExp;
		this.recreationExp = obj.recreationExp;
		this.hobbyExp = obj.hobbyExp;
		this.workoutTask = obj.workoutTask;
		this.learningTask = obj.learningTask;
		this.nutritionTask = obj.nutritionTask;
		this.recreationTask = obj.recreationTask;
		this.hobbyTask = obj.hobbyTask;
	}
}
