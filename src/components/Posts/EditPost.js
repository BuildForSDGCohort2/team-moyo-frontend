import React, { useState } from "react";
import { UpperSection } from "../../reusable-components/upperSection";
import { Input } from "../../reusable-components/input";
import { Button } from "../../reusable-components/button";
import { ButtonOutlined } from "../../reusable-components/buttonOutlined";
import { moyoFirestore } from "../../firebase/config";

export const EditPost = ({ location }) => {
	const data = location.state;
	const [likes, setLikes] = useState(data.likes);
	const [tags, setTags] = useState(data.tags);
	const [name, setName] = useState(data.name);
	const [images, setImages] = useState(data.images);
	const [comId, setComId] = useState(data.comId);
	const [parentId, setParentId] = useState(data.parentId);
	const [language, setLanguage] = useState(data.language);
	const [postBody, setPostBody] = useState(data.postBody);
	const [msg, setMsg] = useState(false);
	const onHandler = (type, value) => type(value);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		let tagsValue = tags;
		let imagesValue = images;
		if (tags.includes(",")) {
			tagsValue = tags.split(",");
		}
		if (images.includes(",")) {
			imagesValue = images.split(",");
		}
		//db stuff goes here....
		const db = moyoFirestore;
		db.collection("Posts")
			.doc(`${name}`)
			.update({
				name: name,
				likes: likes,
				tags: tagsValue,
				language: language,
				postBody: postBody,
				images: imagesValue,
				comId: comId,
				parentId: parentId,
			})
			.then(() => {
				console.log("success to Update db");
				setMsg(true);
				setTimeout(() => {
					setMsg(false);
				}, 2000);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<UpperSection
				headerName="Create New Post"
				moduleName="Manage Posts"
				name="New Post"
			/>
			<div className="createUser-container container">
				<form onSubmit={onSubmitHandler}>
					<div className="row">
						<div className="col-12">
							<h3>Create Post</h3>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="user">Author</label>
							<Input
								type="text"
								placeholder="Enter your name"
								id="user"
								value={name}
								onchange={(e) => onHandler(setName, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="likes">Likes</label>
							<Input
								type="text"
								placeholder="Enter Number of Likes"
								id="likes"
								value={likes}
								onchange={(e) => onHandler(setLikes, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="tags">Tags</label>
							<Input
								type="text"
								placeholder="Enter Tag"
								id="tags"
								value={tags}
								onchange={(e) => onHandler(setTags, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="images">Images</label>
							<Input
								type="text"
								placeholder="Add Image"
								id="images"
								value={images}
								onchange={(e) => onHandler(setImages, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="cumId">Community ID</label>
							<Input
								type="text"
								placeholder="Enter Id if you have"
								id="cumId"
								value={comId}
								onchange={(e) => onHandler(setComId, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="parentId">Parent Post ID</label>
							<Input
								type="text"
								placeholder="Enter Id if you have"
								id="parentId"
								value={parentId}
								onchange={(e) => onHandler(setParentId, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="language">Language</label>
							<Input
								type="text"
								placeholder="Enter your Language"
								id="language"
								value={language}
								onchange={(e) => onHandler(setLanguage, e.target.value)}
							/>
						</div>
						<div className="form-group bio-input col-10">
							<label htmlFor="body">Post Body</label>
							<textarea
								placeholder="Type your Post"
								className="body"
								value={postBody}
								onChange={(e) => onHandler(setPostBody, e.target.value)}
							/>
						</div>
					</div>
					<div>
						{msg ? (
							<p className="message-success">Updated Successfully</p>
						) : null}
					</div>
					<div className="controls">
						<ButtonOutlined buttonName="Cancel" />
						<Button buttonName="Save" type={"submit"} />
					</div>
				</form>
			</div>
		</div>
	);
};
