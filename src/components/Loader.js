import React from 'react';
import './Loader.css';

/**@module components/Button */

const Loader = () => {
	return (
		<div className="spinner-border">
			<span className="screen-reader-only">Loading...</span>
		</div>
	);
};

export default Loader;
