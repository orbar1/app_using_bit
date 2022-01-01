import User from '../models/user';
import mongoose from 'mongoose';
import express from 'express';

type UserObject = {
	username: String;
	fullName: String;
	age: Number;
	password: String;
	_id: mongoose.Schema.Types.ObjectId;
};

type RequestBody = {
	username: String;
	fullName: String;
	age: Number;
	password: String;
};

const getUser = async (req: express.Request, res: express.Response) => {
	const username = req.params.username;
	try {
		const user = (await User.findOne({ username: username })) as UserObject;

		res.status(200).json({
			message: 'User retrieved successfully',
			user: {
				username: user.username,
				fullName: user.fullName,
				age: user.age
			}
		});
	} catch (error) {
		res.status(404).json({
			message: 'User Not Found'
		});
	}
};

const postUser = async (req: express.Request, res: express.Response) => {
	const reqBody = req.body as RequestBody;

	try {
		(await User.create(reqBody)) as UserObject;

		res.status(201).json({
			message: 'User Created Successfully',
			user: reqBody
		});
	} catch (error) {
		res.status(400).json({
			message: 'Some Error occurred!'
		});
	}
};

export default { getUser, postUser };
