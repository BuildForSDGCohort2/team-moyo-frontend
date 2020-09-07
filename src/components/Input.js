import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

/**@module components/Button */

const Input = ({ type, name, required, ...props }) => {
    return (
        <input
            className="moyo-input"
            type={type}
            name={name}
            required={required}
            {...props}
        />
    );
};

Input.propTypes = {
    /**
     * The name of the input element
     */
    name: PropTypes.string.isRequired,
    /**
     * The type of input Elelemt it is
     */
    type: PropTypes.string.isRequired,
    /**
     * Is the Input Required or not
     */
    required: PropTypes.bool,
    /**
     * The change handler for the input element
     */
    onChange: PropTypes.func,
};

Input.defaultProps = {
    type: "text",
    onChange: undefined,
};
export default Input;
