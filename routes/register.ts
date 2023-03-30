import { Router } from 'express';
import { User } from '../records/user-record';
import { UserTask } from '../records/user-task-record';

export const userRegister = Router()

	.post('/', async (req, res) => {
		const { body, } = req;

		const placeholder = 'You not have any task, please add.';

		console.log(body);
		const user = new User({ username: 'Maxx', password: '1234', email: 'rad@fa', });
		console.log(user);

		user.insert();

		console.log(user.id);

		const userData = new UserTask({
			id: user.id,
			username: user.username,
			allExp: 0,
			workoutExp: 0,
			learningExp: 0,
			nutritionExp: 0,
			recreationExp: 0,
			hobbyExp: 0,
			workoutTask: JSON.parse(placeholder),
			learningTask: JSON.parse(placeholder),
			nutritionTask: JSON.parse(placeholder),
			recreationTask: JSON.parse(placeholder),
			hobbyTask: JSON.parse(placeholder),

		});
		console.log(userData);
		userData.insert();

		res.json('working');
	});
