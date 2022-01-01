import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	fullName: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

export default mongoose.model('User', userSchema);
