import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, size, ...props }) => {
	return (
		<button
			className={['moyo-button', `moyo-button--${size}`].join(' ')}
			{...props}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	/**
	 * The label of The Button
	 */
	label: PropTypes.string.isRequired,
	/**
	 * How Large the button should be
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	size: 'small',
	onClick: undefined,
};
export default Button;
