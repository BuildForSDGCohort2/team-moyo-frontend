import React, { useState } from "react";

export const CheckBox = ({ block }) => {
	const [checked, setChecked] = useState(false);
	console.log(checked);
	return (
		<div>
			<input
				type="checkbox"
				onChange={() => setChecked((prevState) => !prevState)}
				onClick={() => block(!checked)}
			/>
		</div>
	);
};
