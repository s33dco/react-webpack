import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<nav className="header">
			<NavLink
				className="header__link"
				to="/"
				activeClassName="is-active"
				exact
			>
				Home
			</NavLink>
			<NavLink
				className="header__link"
				to="/other-page"
				activeClassName="is-active"
				exact
			>
				Other Page
			</NavLink>
		</nav>
	</header>
);

export default Header;
