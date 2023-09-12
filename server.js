const app = require("./app");
const connectDatabase = require("./db/Database");

// Handling uncaught Exception
process.on('uncaughtException', (error) => {
	console.log(`Error: ${error.message}`);
	console.log('shutting down the server for handling uncaught exception!');
});

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
	require("dotenv").config({
		path: "backend/config/.env",
	});
}

// Connect DB
connectDatabase();

// Create server
const server = app.listen(process.env.PORT, () => {
	console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});

// Unhandled promis rejection
process.on('unhandledRejection', (error) => {
	console.log(`Error: ${error.message}`);
	console.log('Shutting down the server for unhandled promis rejection!');

	server.close(() => {
		process.exit(1);
	});
});