const express = require("express");

const app = express();

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
	require("dotenv").config({
		path: "backend/config/.env",
	});
}

module.exports = app;