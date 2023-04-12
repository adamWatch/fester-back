import { Router } from 'express';
import { User } from '../records/user-record';
import { UserTask } from '../records/user-task-record';
import { Notice } from '../types/notice/notice';

export const userRegister = Router()

	.post('/register', async (req, res) => {
		const { body, } = req;

		const placeholder = 'None';

		const user = new User({ username: body.username, password: body.password, email: body.email, });
		user.insert();

		const userData = new UserTask({
			id: user.id,
			username: user.username,
			allExp: 0,
			workoutExp: 0,
			learningExp: 0,
			nutritionExp: 0,
			recreationExp: 0,
			hobbyExp: 0,
			workoutTask: JSON.stringify(placeholder),
			learningTask: JSON.stringify(placeholder),
			nutritionTask: JSON.stringify(placeholder),
			recreationTask: JSON.stringify(placeholder),
			hobbyTask: JSON.stringify(placeholder),
			idTasks: 1,

		});
		userData.insert();

		const notice:Notice = {
			isVisible: true,
			noticeText: 'You are register you can log in',
			noticeColor: 'green',
		};

		res.json(notice);
	});
