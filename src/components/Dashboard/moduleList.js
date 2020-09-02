import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Path } from "../../reusable-components/link";

export const ModuleList = (props) => {
	const { moduleName, lists, icon } = props;
	const openHandler = (e) => {
		let ele = [...e.currentTarget.childNodes];
		ele[1].classList.toggle("open");
		if (e.target.classList.contains("list-item")) {
			ele[1].classList.add("open");
		}
		if (e.target.classList.contains("module-name")) {
			e.target.classList.toggle("clicked");
			ele[0].classList.toggle("clicked");
		}
	};
	return (
		<li className="list container" onClick={openHandler}>
			<a>
				<FontAwesomeIcon icon={icon} />
				<span className="module-name">{moduleName}</span>
				{lists ? (
					<FontAwesomeIcon icon={faAngleRight} className="arrow" />
				) : null}
			</a>
			<ul className="list-menu">
				{lists
					? lists.map((name) => (
							<Path name={name[0]} url={name[1]} key={name[0]} />
					  ))
					: null}
			</ul>
		</li>
	);
};
