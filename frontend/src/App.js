import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navigation } from '@orbar/bit-react-components.ui.navigation/dist/navigation';
import { Container } from '@orbar/bit-react-components.ui.container/dist/container';
import UserCreationForm from './components/UserCreationForm/UserCreationForm';
import GetUserForm from './components/getUserForm/GetUserForm';

function App() {
	return (
		<Router>
			<Navigation
				links={[
					{ name: 'Get User', path: '/' },
					{ name: 'Signup', path: '/signup' }
				]}
			/>
			<Container
				style={{
					backgroundColor: '#ddd',
					margin: '5rem auto',
					maxWidth: '40rem',
					alignItems: 'center',
					padding: '3rem'
				}}
			>
				<Routes>
					<Route exact path='/' element={<GetUserForm />}></Route>
					<Route exact path='/signup' element={<UserCreationForm />}></Route>
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
