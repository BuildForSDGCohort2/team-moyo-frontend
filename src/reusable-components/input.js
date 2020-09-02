import React from "react";

export const Input = props => {
    const { type, placeholder, onchange, value, required } = props;
    return (
        <div className="input-container">
            {value !== null ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="form-control"
                    onChange={onchange}
                    value={value}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="form-control"
                    onChange={onchange}
                    required={required}
                />
            )}
        </div>
    );
};
