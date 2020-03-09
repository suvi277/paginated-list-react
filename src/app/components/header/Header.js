import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.scss';

const Header = ({ title }) => {
	return (
		<header>
			<Container>
				<h4 className="text-white">
					<small>{title}</small>
				</h4>
			</Container>
		</header>
	);
};
export default Header;
