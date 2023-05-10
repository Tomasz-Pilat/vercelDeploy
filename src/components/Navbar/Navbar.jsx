import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>Michael-Donald</NavLink>
				<NavIcon onClick={toggle}>
					<p>Login / Register</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
