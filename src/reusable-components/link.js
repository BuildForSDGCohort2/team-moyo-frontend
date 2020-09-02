import React from "react";
import { NavLink } from "react-router-dom";

export const Path = props => {
    const { name, url } = props;
    return (
        <NavLink
            to={url}
            activeClassName="highlighted"
            className="dropdown-item list-item"
        >
            {name}
        </NavLink>
    );
};
