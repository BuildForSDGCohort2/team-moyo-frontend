import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const BreadCrumbs = props => {
    const { moduleName, name } = props;
    return (
        <div className="breadcrumb-container container">
            <FontAwesomeIcon icon={faHome} />
            <span>{moduleName}</span>
            <span>/</span>
            <span>{name}</span>
        </div>
    );
};
