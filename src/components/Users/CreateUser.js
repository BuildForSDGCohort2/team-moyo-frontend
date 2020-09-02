import React, { useState } from "react";
import { UpperSection } from "../../reusable-components/upperSection";
import { Input } from "../../reusable-components/input";
import { Button } from "../../reusable-components/button";
import { ButtonOutlined } from "../../reusable-components/buttonOutlined";
import { moyoFirestore } from "../../firebase/config";

export const CreateUser = () => {
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [name, setName] = useState("");
	const [github, setGithub] = useState("");
	const [twitter, setTwitter] = useState("");
	const [mobile, setMobile] = useState("");
	const [bio, setBio] = useState("");
	const onHandler = (type, value) => type(value);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		//db stuff goes here....
		const db = moyoFirestore;
		db.collection("Users")
			.doc(`${name}`)
			.set({
				name: name,
				email: email,
				country: country,
				github: github,
				twitter: twitter,
				mobile: mobile,
				bio: bio,
			})
			.then(() => console.log("success to add to db"))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<UpperSection
				headerName="Create New User"
				moduleName="Manage Users"
				name="New User"
			/>
			<div className="createUser-container container">
				<form onSubmit={onSubmitHandler}>
					<div className="row">
						<div className="col-12">
							<h3>Create User</h3>
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
					<div className="controls">
						<ButtonOutlined buttonName="Cancel" />
						<Button buttonName="Save" type={"submit"} />
					</div>
				</form>
			</div>
		</div>
	);
};
