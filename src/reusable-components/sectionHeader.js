import React from "react";

export const SectionHeader = props => {
    const { headerName } = props;
    return (
        <div className="container">
            <h1>{headerName}</h1>
        </div>
    );
};
