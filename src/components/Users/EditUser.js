import React, { useState } from "react";
import { UpperSection } from "../../reusable-components/upperSection";
import { Input } from "../../reusable-components/input";
import { Button } from "../../reusable-components/button";
import { ButtonOutlined } from "../../reusable-components/buttonOutlined";
import { moyoFirestore } from "../../firebase/config";
import { useHistory } from "react-router-dom";

export const EditUser = ({ location }) => {
	const data = location.state;
	const [email, setEmail] = useState(data.email);
	const [country, setCountry] = useState(data.country);
	const [name, setName] = useState(data.name);
	const [github, setGithub] = useState(data.github);
	const [twitter, setTwitter] = useState(data.twitter);
	const [mobile, setMobile] = useState(data.mobile);
	const [bio, setBio] = useState(data.bio);
	const [msg, setMsg] = useState(false);
	const onHandler = (type, value) => type(value);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		//db stuff goes here....
		const db = moyoFirestore;
		db.collection("Users")
			.doc(`${name}`)
			.update({
				name: name,
				email: email,
				country: country,
				github: github,
				twitter: twitter,
				mobile: mobile,
				bio: bio,
			})
			.then(() => {
				console.log("success to update db");
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
				headerName="Edit User"
				moduleName="Manage Users"
				name="Edit User"
			/>
			<div className="createUser-container container">
				<form onSubmit={onSubmitHandler}>
					<div className="row">
						<div className="col-12">
							<h3>Edit User</h3>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="website">Name</label>
							<Input
								type="text"
								placeholder="Enter your name"
								id="website"
								value={name}
								onchange={(e) => onHandler(setName, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="userEmail">User Email</label>
							<Input
								type="email"
								placeholder="Enter Email"
								id="userEmail"
								value={email}
								onchange={(e) => onHandler(setEmail, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="country">Country</label>
							<Input
								type="text"
								placeholder="Enter User Country"
								id="country"
								value={country}
								onchange={(e) => onHandler(setCountry, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="github">GitHub</label>
							<Input
								type="text"
								placeholder="Enter Github account"
								id="github"
								value={github}
								onchange={(e) => onHandler(setGithub, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="twitter">Twitter</label>
							<Input
								type="text"
								placeholder="Enter Twitter account"
								id="twitter"
								value={twitter}
								onchange={(e) => onHandler(setTwitter, e.target.value)}
							/>
						</div>
						<div className="form-group input col-5">
							<label htmlFor="mobile">Mobile Number</label>
							<Input
								type="text"
								placeholder="Enter Mobile number"
								id="mobile"
								value={mobile}
								onchange={(e) => onHandler(setMobile, e.target.value)}
							/>
						</div>
						<div className="form-group bio-input col-10">
							<label htmlFor="jobOwnerNameInput">Bio</label>
							<textarea
								placeholder="Enter User Bio"
								className="bio"
								value={bio}
								onChange={(e) => onHandler(setBio, e.target.value)}
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
