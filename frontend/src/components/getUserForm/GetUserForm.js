import { useState } from 'react';

import useGetUser from '../../hooks/useGetUser';
import { Input } from '@orbar/bit-react-components.ui.input/dist/input';
import { Button } from '@orbar/bit-react-components.ui.button/dist/button';

import classes from './GetUserForm.module.css';

const GetUserForm = props => {
	const [username, setUsername] = useState('');
	const [userData, setUserData] = useState(null);
	const [error, isLoading, getUser] = useGetUser();

	const usernameChangeHandler = event => {
		setUsername(event.target.value);
	};

	const formSubmitHandler = async event => {
		event.preventDefault();
		const usrName = username.trim();

		setUserData(null);

		if (!usrName) return alert('Username must not be empty!');

		const usrData = await getUser(usrName);

		setUsername('');
		setUserData(usrData);
	};

	if (!error && !isLoading) {
		return (
			<>
				<h2 className={classes['form-heading']}>Get User</h2>
				<form onSubmit={formSubmitHandler}>
					<Input
						label='USERNAME'
						input={{
							id: 'username',
							type: 'text',
							value: username,
							onChange: usernameChangeHandler
						}}
					/>
					<div className='form-actions'>
						<Button type='submit' text='Find User' />
					</div>
				</form>

				{userData && (
					<div className={classes['user-details']}>
						<h2 className={classes['user-details-heading']}>User Details</h2>

						<table className={classes['user-details-table']}>
							<tbody>
								<tr>
									<th>Username:</th>
									<td>{userData.username}</td>
								</tr>
								<tr>
									<th>Full Name:</th>
									<td>{userData.fullName}</td>
								</tr>
								<tr>
									<th>Age:</th>
									<td>{userData.age}</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</>
		);
	}

	if (error) {
		return (
			<h3 className={classes.error}>
				Something went wrong! (Username does not exist)
			</h3>
		);
	}

	if (isLoading) {
		return <h3 className={classes.loading}>Sending request...</h3>;
	}
};

export default GetUserForm;
