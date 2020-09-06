import React from "react";
import { SectionHeader } from "./sectionHeader";
import { BreadCrumbs } from "./breadcrumbs";
import { Button } from "./button";
import { Link } from "react-router-dom";

export const UpperSection = props => {
    const {
        headerName,
        moduleName,
        name,
        buttonName,
        linkName,
        linkUrl
    } = props;
    return (
        <div className="section-header-container">
            <SectionHeader headerName={headerName} />
            <BreadCrumbs moduleName={moduleName} name={name} />
            {buttonName ? <Button buttonName={buttonName} /> : null}
            {linkName && linkUrl ? (
                <Link to={linkUrl} className="link-btn">
                    {linkName}
                </Link>
            ) : null}
        </div>
    );
};
