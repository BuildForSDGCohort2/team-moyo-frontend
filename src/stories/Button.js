import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, size, ...props }) => {
	return (
		<button
			className={['moyo-button', `moyo-button-${size}`]}
			{...props}
		>
			{label}
		</button>
	);
};

export default Button;
