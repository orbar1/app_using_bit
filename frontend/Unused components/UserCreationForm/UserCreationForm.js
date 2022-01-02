import { useState } from 'react';

import { Input } from '@orbar/bit-react-components.ui.input/dist/input';
import { Button } from '@orbar/bit-react-components.ui.button/dist/button';

import classes from './UserCreationForm.module.css';

const UserCreationForm = props => {
	const [username, setUsername] = useState('');
	const [fullName, setFullName] = useState('');
	const [age, setAge] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [isSending, setIsSending] = useState(false);

	const userNameChangeHandler = event => {
		setUsername(event.target.value);
	};

	const fullNameChangeHandler = event => {
		setFullName(event.target.value);
	};

	const ageChangeHandler = event => {
		setAge(event.target.value);
	};

	const passwordChangeHandler = event => {
		setPassword(event.target.value);
	};

	const formSubmitHandler = async event => {
		event.preventDefault();
		const usrName = username.trim();
		const flName = fullName.trim();
		const ag = age.trim();
		const pswd = password.trim();

		if (!usrName) return alert('Username must not be empty');
		if (!flName) return alert('Full Name must not be empty');
		if (!ag) return alert('Age must not be empty');
		if (!pswd) return alert('Password must not be empty');

		setError(null);
		setIsSending(true);

		try {
			const res = await fetch('http://localhost:3000/addUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: usrName,
					fullName: flName,
					age: +ag,
					password: pswd
				})
			});

			if (!res.ok) {
				throw new Error('Something went wrong!');
			}

			setIsSending(false);
			setUsername('');
			setFullName('');
			setAge('');
			setPassword('');
			alert('User Created Successfully!');
		} catch (error) {
			setIsSending(false);
			setError('Something went wrong! (Username already taken)');
			console.log(error);
		}
	};

	if (!error && !isSending) {
		return (
			<>
				<h2 className={classes['form-heading']}>Signup</h2>
				<form onSubmit={formSubmitHandler}>
					<Input
						label='USERNAME'
						input={{
							id: 'username',
							type: 'text',
							value: username,
							onChange: userNameChangeHandler
						}}
					/>

					<Input
						label='FULL NAME'
						input={{
							id: 'fullName',
							type: 'text',
							value: fullName,
							onChange: fullNameChangeHandler
						}}
					/>
					<Input
						label='AGE'
						input={{
							id: 'age',
							type: 'number',
							value: age,
							onChange: ageChangeHandler
						}}
					/>
					<Input
						label='PASSWORD'
						input={{
							id: 'password',
							type: 'password',
							value: password,
							onChange: passwordChangeHandler
						}}
					/>
					<div className={classes['form-actions']}>
						<Button color='#099268' type='submit' text='Signup' />
					</div>
				</form>
			</>
		);
	}

	if (error) {
		return <h3 className={classes.error}>{error}</h3>;
	}

	if (isSending) {
		return <h3 className={classes.sending}>Sending Request...</h3>;
	}
};

export default UserCreationForm;
