const express = require("express");
const path = require("path");

const ErrorHandler = require("../utils/ErrorHandler");
const { upload } = require("../multer");
const User = require("../model/User");

const router = express.Router();

router.post('/create-user', upload.single('file'), async (req, res, next) => {
	const { fullName, email, password } = req.body;
	const userEmail = await User.findOne({ email });
	const fileUrl = null;

	if (userEmail) {
		return next(new ErrorHandler('User already exists', 400));
	}

	if (req.file) {
		const fileName = req.file.filename;
		fileUrl = path.join(fileName);
	}

	const user = {
		fullName,
		email,
		password,
		avatar: fileUrl,
	};

	console.log(user);
});

module.exports = router;