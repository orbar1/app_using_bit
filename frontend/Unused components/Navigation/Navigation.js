import { Link } from 'react-router-dom';

import classes from './navigation.module.css';

const Navigation = props => {
	return (
		<nav className={classes['main-nav']}>
			<ul className={classes['nav-list']}>
				<li className={classes['nav-list-item']}>
					<Link className={classes['nav-link']} to='/'>
						Get User
					</Link>
				</li>
				<li className={classes['nav-list-item']}>
					<Link className={classes['nav-link']} to='/signup'>
						Signup
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
