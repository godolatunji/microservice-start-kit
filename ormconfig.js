// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

process.env.ENV_PATH ? dotenv.config({ path: process.env.ENV_PATH }) : dotenv.config();

module.exports = {
	type: 'postgres',
	host: process.env.PGHOST,
	port: Number.parseInt(process.env.PGPORT, 2),
	username: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	database: process.env.PGDATABASE,
	entities: ['dist/**/*.model.js'],
	migrations: ['dist/database/migrations/*.js'],
	cli: {
		migrationsDir: 'src/database/migrations',
	},
}
