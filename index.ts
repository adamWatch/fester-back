import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from 'cors';
import 'express-async-errors';

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
}));

app.use(express.json());

app.listen(3001, '0.0.0.0', () => {
	console.log('Listening on port http://localhost:3001');
});
