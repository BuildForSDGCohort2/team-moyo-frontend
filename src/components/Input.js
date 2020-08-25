import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, required, ...props }) => {
	return (
		<input
			className="moyo-input"
			type={type}
			required={required}
			{...props}
		/>
	);
};

Input.propTypes = {
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
	type: 'text',
	onChange: undefined,
};
export default Input;
