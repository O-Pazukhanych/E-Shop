const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const ErrorHandler = require("./utils/ErrorHandler");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
	require("dotenv").config({
		path: "backend/config/.env",
	});
}

// Import routs
const user = require("./controller/user");

app.use("/api/v2/user", user);

// It`s for ErrorHandling
app.use(ErrorHandler);

module.exports = app;