import React, { useState } from "react";
import { UpperSection } from "../../reusable-components/upperSection";
import { Input } from "../../reusable-components/input";
import { Button } from "../../reusable-components/button";
import { ButtonOutlined } from "../../reusable-components/buttonOutlined";
import { moyoFirestore } from "../../firebase/config";

export const CreatePost = () => {
	const [likes, setLikes] = useState("");
	const [tags, setTags] = useState("");
	const [name, setName] = useState("");
	const [images, setImages] = useState("");
	const [comId, setComId] = useState("");
	const [parentId, setParentId] = useState("");
	const [language, setLanguage] = useState("");
	const [postBody, setPostBody] = useState("");
	const [msg, setMsg] = useState(false);
	const tagsArray = [];
	const imagesArray = [];
	const onHandler = (type, value) => type(value);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const tagsValue = tags.split(",");
		const imagesValue = images.split(",");
		//db stuff goes here....
		const db = moyoFirestore;
		db.collection("Posts")
			.doc(`${name}`)
			.set({
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
				console.log("success to add to db");
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
							<p className="message-success">Created Successfully</p>
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
