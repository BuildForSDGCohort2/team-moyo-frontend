import React from "react";
import { AdminProfile } from "./adminProfile";
import { ProfileImage } from "./profileImage";
import "../../styles/Dashboard/app.scss";
import image from "../../images/logo-moyo.png";
export const Header = (props) => {
	return (
		<div className="header-container">
			<nav className="navbar-nav navbar-expand-lg header">
				<ProfileImage avatar={image} />
				<AdminProfile name="Mohamed" />
			</nav>
		</div>
	);
};
