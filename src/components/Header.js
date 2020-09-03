import React from 'react';
import Logo from './moyo.png';
import './Header.css';

const Header = () => {
	return (
		<header className="header mb-20">
			<div className="flex-row  header-wrapper">
				<div className="col-3-12 logo-wrap">
					<img src={Logo} alt="Moyo Logo" height="30px" />
				</div>
				<div className="col-6-12"></div>
				<div className="col-3-12"></div>
			</div>
		</header>
	);
};

export default Header;
