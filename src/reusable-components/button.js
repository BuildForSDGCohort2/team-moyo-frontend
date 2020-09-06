import React from "react";

export const Button = props => {
    const { buttonName, onclick, dataTarget, dataDismiss, dataToggle } = props;
    return (
        <div className="button-container">
            {onclick ? (
                <button onClick={onclick}>{buttonName}</button>
            ) : dataToggle && dataTarget && dataDismiss ? (
                <button
                    data-target={dataTarget}
                    data-dismiss={dataDismiss}
                    data-toggle={dataToggle}
                >
                    {buttonName}
                </button>
            ) : (
                <button>{buttonName}</button>
            )}
        </div>
    );
};
