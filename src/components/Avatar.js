import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

/**@module components/Button */

const Avatar = ({ url, alt, ...props }) => {
	return (
		<div>
			<img src={url} alt={alt} {...props} className="moyo-avatar" />
		</div>
	);
};

Avatar.propTypes = {
	/**
	 * The URL to the image
	 */
	url: PropTypes.string.isRequired,
	/**
	 * The alt attribute of the Avatar
	 */
	title: PropTypes.string,
};

Avatar.defaultProps = {
	alt: 'Image may contain - Moyo User',
};
export default Avatar;
