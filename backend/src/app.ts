import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import userRoutes from './routes/user';

const PORT = 3000;

mongoose
	.connect(
		'mongodb+srv://orbar:Aa123456@cluster1.plrb4.mongodb.net/users_db?retryWrites=true&w=majority'
	)
	.then(mongoRes => {
		console.log('db connected');

		const app = express();

		app.use(bodyParser.json());

		app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
			res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
			next();
		});

		app.use('/api/v1/users', userRoutes);

		app.listen(PORT,()=>{
			console.log(`App is running on port ${PORT}...`)
		});
	})
	.catch(err => console.log(err));
