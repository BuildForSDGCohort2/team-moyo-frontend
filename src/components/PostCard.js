import React, { useState } from 'react';
import './Card.css';
import CodeEditor from './CodeEditor';
import PropTypes from 'prop-types';
import { ReactComponent as Heart } from './icons/heart.svg';
import { ReactComponent as Comment } from './icons/comment.svg';
import { ReactComponent as Code } from './icons/code.svg';

/**@module components/PostCard */

const PostCard = ({
	text,
	name,
	profilePicture,
	code,
	datePosted,
}) => {
	const [codeBlock, setcodeBlock] = useState(Object.values(code)[0]);
	const [isCodeHidden, setISCodeHidden] = useState(true);

	function handleTabClick(block) {
		setcodeBlock(code[block]);
	}

	return (
		<div className="moyo-postcard mb-10">
			<div className="p-12 flex-row col moyo-postcard--header">
				<div className="col-6-12 flex-row">
					<img
						src={profilePicture}
						alt={name}
						className="profile-picture"
					/>
				</div>
				<div className="col-2-12 moyo-postcard-date">
					<small>{datePosted}</small>
				</div>
			</div>

			<div className="p-12 moyo-postcard--text mb-20">{text}</div>

			{isCodeHidden ? (
				<div />
			) : (
				<div>
					<div className="flex-row">
						{Object.keys(code).map((codeTab) => (
							<button
								className="code-tab"
								key={Math.random()}
								onClick={() => handleTabClick(codeTab)}
							>
								{codeTab}
							</button>
						))}
					</div>
					<div className="code-view">
						<CodeEditor value={codeBlock} readonly="true" />
					</div>
				</div>
			)}

			<div className="p-12">
				<button className="p-4 action-button">
					<Heart height="15px" width="15px" />
					200
				</button>
				<button className="p-4 action-button">
					<Comment height="15px" width="15px" />
					30
				</button>
				<button
					className="p-4 action-button"
					onClick={() =>
						isCodeHidden
							? setISCodeHidden(false)
							: setISCodeHidden(true)
					}
				>
					<Code height="15px" width="15px" />
					View Code
				</button>
			</div>
		</div>
	);
};

export default PostCard;

PostCard.propTypes = {
	text: PropTypes.string,
	name: PropTypes.string,
	code: PropTypes.object,
	datePosted: PropTypes.string,
};
