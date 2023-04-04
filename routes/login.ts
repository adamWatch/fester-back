import { Router } from 'express';
import { User } from '../records/user-record';
import { Notice } from '../types';

export const LoginRouter = Router()

	.post('/login', async (req, res) => {
		const { body, } = req;
		const user = await User.getOneByEmail(body.email);
		console.log(user);
		if (user.password === body.password) {
			const notice:Notice = {
				isVisible: true,
				noticeText: 'You are log in',
				noticeColor: 'green',
			};

			res.json(notice);
		}
		if (user.password !== body.password) {
			const notice:Notice = {
				isVisible: true,
				noticeText: 'You email or password doesn\'t exist',
				noticeColor: 'red',
			};

			res.json(notice);
		}
	});
