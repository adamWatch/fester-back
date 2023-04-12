/* eslint-disable no-unused-vars */
import express, { urlencoded } from 'express';
import cors from 'cors';
import 'express-async-errors';

import { userRegister } from './routes/register';
import { handleError } from './utils/error';
import { LoginRouter } from './routes/login';
import { handleAction } from './routes/handleAction';

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
}));

app.use(express.urlencoded({
	extended: true,
}));

app.use(express.json());

app.use(handleError);

app.use(userRegister);
app.use(LoginRouter);
app.use(handleAction);

app.listen(3021, '0.0.0.0', () => {
	console.log('Listening on port http://localhost:3021');
});
