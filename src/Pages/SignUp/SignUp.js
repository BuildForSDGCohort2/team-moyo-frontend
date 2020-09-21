import React, { useContext, useEffect, useState } from "react";
import "./SignUp.css";
import googleImage from "../../components/icons/google.png";
import githubImage from "../../components/icons/github.png";
import { Button } from "../../components";
import { githubProvider, googleProvider } from "../../firebase.config";
import firebase from "firebase";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const addGoogleAuth = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((res) => {
                console.log(res);
                setIsAuth(true);
            })
            .catch((err) => console.log(err));
    };
    const addGithubAuth = () => {
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((res) => {
                console.log(res);
                setIsAuth(true);
            })
            .catch((err) => console.log(err));
    };
    const onChangeHandler = (value, setValue) => {
        setValue(value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                setIsAuth(true);
            })
            .catch((err) => {
                console.log(err);
                if (err.message) {
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then((res) => {
                            console.log(res);
                            setIsAuth(true);
                        })
                        .catch((err) => console.log(err));
                }
            });
    };
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
                        <img src={githubImage} alt="" onClick={addGithubAuth} />
                        <img src={googleImage} alt="" onClick={addGoogleAuth} />
                    </div>
                    <form className="signup-form">
                        <div className="input-container">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={name}
                                onChange={(e) =>
                                    onChangeHandler(e.target.value, setName)
                                }
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) =>
                                    onChangeHandler(e.target.value, setEmail)
                                }
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) =>
                                    onChangeHandler(e.target.value, setPassword)
                                }
                            />
                        </div>
                        <div className="submit-btn-container">
                            <button
                                className="submit-btn"
                                onClick={(e) => onSubmitHandler(e)}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
