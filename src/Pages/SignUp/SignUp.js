import React from "react";
import "./SignUp.css";
import googleImage from "../../components/icons/google.png";
import githubImage from "../../components/icons/github.png";
import { Button, Input } from "../../components";

export const SignUp = () => {
    return (
        <div className="container">
            <div className="left-side">
                <h1 className="left-title">Join Thousands of Developers</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="right-side">
                <h1 className="right-title">Sign Up to Moyo</h1>
                <div className="right-container">
                    <div className="icons-container">
                        <img src={githubImage} alt="" />
                        <img src={googleImage} alt="" />
                    </div>
                    <form className="signup-form">
                        <div className="input-container">
                            <label htmlFor="fullName">Full Name</label>
                            <Input
                                type="text"
                                name="fullName"
                                required="true"
                                id="fullName"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="email"
                                name="email"
                                required="true"
                                id="email"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                required="true"
                                id="password"
                            />
                        </div>
                        <div className="submit-btn">
                            <Button label="Sign Up" size="large" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
