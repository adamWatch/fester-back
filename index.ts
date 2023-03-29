import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { User } from './records/user-record';

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
}));

// eslint-disable-next-line no-unused-vars
app.get('/', async (req, res) => {
	const user = await User.getOne('bc47f314-ce24-11ed-b79e-2cf05d21c3a3');
	console.log(user);
});

app.use(express.json());

app.listen(3001, '0.0.0.0', () => {
	console.log('Listening on port http://localhost:3001');
});
