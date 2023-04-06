import { Router } from 'express';
import { User } from '../records/user-record';
import { Notice, NoticeWithId } from '../types';
import { UserLogged } from '../records/user-logged-record';

export const LoginRouter = Router()

	// eslint-disable-next-line consistent-return
	.post('/login', async (req, res) => {
		const { body, } = req;
		const user = await User.getOneByEmail(body.email);
		console.log(user);
		if (user === null) {
			const notice:Notice = {
				isVisible: true,
				noticeText: 'You email or password doesn\'t exist',
				noticeColor: 'red',
			};
			return res.json(notice);
		}
		if (user !== null) {
			if (user.password === body.password) {
				const userIsLogged = new UserLogged(user.id, user.username);
				userIsLogged.insert();
				const notice:NoticeWithId = {
					isVisible: true,
					noticeText: 'You are log in',
					noticeColor: 'green',
					id: user.id,
				};

				res.json(notice);
			}
			if (user.password !== body.password) {
				const notice:Notice = {
					isVisible: true,
					noticeText: 'You email or password not correct',
					noticeColor: 'red',
				};

				res.json(notice);
			}
		}
	});
