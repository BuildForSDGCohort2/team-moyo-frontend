import React from "react";

export const ButtonOutlined = props => {
    const { onclick, buttonName, dataDismiss } = props;
    return (
        <div className="buttonOutlined-container">
            {onclick ? (
                <button onClick={onclick}>{buttonName}</button>
            ) : dataDismiss ? (
                <button data-dismiss={dataDismiss}>{buttonName}</button>
            ) : (
                <button>{buttonName}</button>
            )}
        </div>
    );
};
