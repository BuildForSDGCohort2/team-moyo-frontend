import React, { useState } from "react";

export const CheckBox = ({ block }) => {
	const [checked, setChecked] = useState(false);
	return (
		<div>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked((prevState) => !prevState)}
				onClick={() => block()}
			/>
		</div>
	);
};
