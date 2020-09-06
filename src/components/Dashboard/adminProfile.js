import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const AdminProfile = (props) => {
	return (
		<li className="nav-item dropdown profile-drop">
			<a
				className="nav-link profile-name"
				id="navbarDropdown"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				{props.name}
			</a>
			<FontAwesomeIcon icon={faAngleRight} />
			<div
				className="dropdown-menu profile-menu"
				aria-labelledby="navbarDropdown"
			>
				<Link className="dropdown-item" to="/edit-admin-profile">
					My Profile
				</Link>
				<div className="dropdown-divider"></div>
				<Link className="dropdown-item profile-menu" to="/login">
					LogOut
				</Link>
			</div>
		</li>
	);
};
