import { createPool } from 'mysql2/promise';

export const pool = createPool({
	host: 'localhost',
	user: 'root',
	database: 'motivator_data',
	namedPlaceholders: true,
	decimalNumbers: true,
});
