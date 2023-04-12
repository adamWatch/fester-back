import { Router, Request, Response } from 'express';
import { UserTask } from '../records/user-task-record';
import { ValidationError } from '../utils/error';
import { UserExpWorkout } from '../types';

let userId = '';

export const handleAction = Router()

	.post('/getData', async (req:Request, res:Response) => {
		const { body, } = req;
		console.log(body.id);

		if (body.typeCategory === 'workout') {
			const userExp = await UserTask.getOne(body.id);
			if (userExp === null) {
				throw new ValidationError('This Id is not existed');
			}
			userId = userExp.id;
			const userExpToSend:UserExpWorkout = {
				id: userExp.id,
				username: userExp.username,
				allExp: userExp.allExp,
				workoutExp: userExp.workoutExp,
				workoutTask: userExp.workoutTask,
				idTasks: userExp.idTasks,
			};

			res.json(userExpToSend);
		}
	})
	.post('/addWorkoutData', async (req:Request, res:Response) => {
		const { body, } = req;
		const parsebody = JSON.stringify(body);
		await UserTask.insertTask(parsebody, userId);
		res.json('ok');
	})
	.post('/changeTaskId', async (req:Request, res:Response) => {
		const { body, } = req;

		await UserTask.updateTaskId(body.id, userId);
		res.json('ok');
	});
