import React from "react";
import { ProfileImage } from "./profileImage";
import { ModuleList } from "./moduleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import image from "../../images/logo-moyo.png";

export const SideMenu = (props) => {
	return (
		<div className="aside-container ">
			<nav className="navbar-nav navbar-expand-lg">
				<ul className="navigation">
					<li className="logo-container">
						<ProfileImage avatar={image} />
					</li>
					<NavLink
						to="/main-dashboard"
						activeClassName="content-page"
						className="dropdown-item list"
					>
						<FontAwesomeIcon icon={faBriefcase} />
						Dashboard
					</NavLink>
					<ModuleList
						moduleName="Manage Posts"
						lists={[
							["Create Post", "/create-post"],
							["Posts History", "/posts-history"],
						]}
						icon={faUsers}
					/>
					<ModuleList
						moduleName="Manage Users"
						lists={[
							["Add new User", "/add-user"],
							["Users List", "/users-list"],
						]}
						icon={faUsers}
					/>
				</ul>
			</nav>
			<div className="copyright-container">
				<p>@2020 Copyright | All Rights Reserved</p>
				<p>Developed By</p>
			</div>
		</div>
	);
};
