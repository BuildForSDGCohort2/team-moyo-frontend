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
	liked,
	likeCount,
	commentCount,
}) => {
	const [codeBlock, setcodeBlock] = useState(Object.values(code)[0]);
	const [isCodeHidden, setISCodeHidden] = useState(true);
	const [isLiked, setIsLiked] = useState(liked);

	function handleTabClick(block) {
		setcodeBlock(code[block]);
	}

	return (
		<div className="moyo-postcard mb-20">
			<div className="p-12 flex-row col moyo-postcard--header">
				<div
					className="col-6-12 flex-row"
					style={{ display: 'flex', alignItems: 'center' }}
				>
					<img
						src={profilePicture}
						alt={name}
						className="profile-picture"
					/>

					<p className="ml-10">{name}</p>
				</div>
				<div className="col-2-12 moyo-postcard-date ml-auto">
					<small>{datePosted}</small>
				</div>
			</div>

			<div className="p-12 moyo-postcard--text">{text}</div>

			{isCodeHidden ? (
				<div />
			) : (
				<div className="code-container mt-20">
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

			<div className="p-12 flex-row">
				<button className="p-4 moyo-button action-button">
					<Heart className="mr-4" height="15px" width="15px" />
					{likeCount}
				</button>
				<button className="p-4 moyo-button action-button">
					<Comment className="mr-4" height="15px" width="15px" />
					{commentCount}
				</button>
				<button
					className="p-4 moyo-button action-button"
					onClick={() =>
						isCodeHidden
							? setISCodeHidden(false)
							: setISCodeHidden(true)
					}
				>
					<Code className="mr-4" height="15px" width="15px" />
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
