import { useState } from 'react';

const useGetUser = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getUser = async username => {
		setIsLoading(true);
		try {
			const res = await fetch(`http://localhost:3000/user/${username.trim()}`);

			if (!res.ok) {
				throw new Error('Request Failed');
			}
			const data = await res.json();

			setIsLoading(false);
			return {
				username: data.user.username,
				fullName: data.user.fullName,
				age: data.user.age
			};
		} catch (error) {
			setIsLoading(false);
			setError(error || 'Something went wrong!');
		}
	};

	return [error, isLoading, getUser];
};

export default useGetUser;
