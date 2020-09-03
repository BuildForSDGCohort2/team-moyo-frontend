import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**@module components/Button */

/**
 *
 * @param {string} label - The content of the button
 * @param {string}  size -  The size of the button [small, medium , large]
 */
const Button = ({ label, size, ...props }) => {
	return (
		<button
			className={['moyo-button', `moyo-button--${size}`].join(' ')}
			{...props}
		>
			{props.children}
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
