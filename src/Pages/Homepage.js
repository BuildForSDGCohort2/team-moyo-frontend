import React, { useState } from "react";
import "./Homepage.css";
import profile from "./profile.jpg";
import { PostCard, Button, Modal } from "../components";
import { ReactComponent as Feed } from "../components/icons/feed.svg";
import { ReactComponent as Console } from "../components/icons/console.svg";
import { ReactComponent as Rocket } from "../components/icons/rocket.svg";
import { ReactComponent as Code } from "../components/icons/code.svg";
import { ReactComponent as Suitcase } from "../components/icons/suitcase.svg";

const Homepage = () => {
    const [isModalOpen, setisModalOpen] = useState(false);
    const code1 = `import React from 'react';
	import AceEditor from 'react-ace';
	import 'ace-builds/src-noconflict/theme-dracula';
	import 'ace-builds/src-noconflict/mode-javascript';

	const CodeEditor = ({ theme, mode, value, ...props }) => {
		return (
			<AceEditor
				mode="javascript"
				theme="dracula"
				value={value}
				height="200px"
			/>
		);
	};

	export default CodeEditor;
	`;

    const code2 = `import React, { useState } from 'react';
	import './Card.css';
	import CodeEditor from './CodeEditor';
	import PropTypes from 'prop-types';

	/**@module components/Button */

	const PostCard = ({ text, name, code, datePosted, ...props }) => {
		return (
			<div className="moyo-postcard mb-10">
				<div className="p-12 flex-row col moyo-postcard--header">
					<div className="col-6-12 flex-row">
						Picture <p className="ml-8">{name}</p>
					</div>
					<div className="col-2-12 moyo-postcard-date">
						<small>{datePosted}</small>
					</div>
				</div>

				<div className="p-12 moyo-postcard--text mb-20">{text}</div>

				<div className="flex-row">
					<section className="code-tab">name.js</section>
				</div>
				<div className="code-view">
					<CodeEditor value={code} />
				</div>
			</div>
		);
	};

	export default PostCard;

	PostCard.propTypes = {
		text: PropTypes.string,
		name: PropTypes.string,
	};
    `;

    return (
        <>
            <div
                style={
                    isModalOpen
                        ? {
                              position: "relative",
                              overflow: "hidden",
                              height: "100vh",
                          }
                        : { position: "unset" }
                }
            >
                <div className="moyo-home">
                    <nav className="moyo-navigation">
                        <ul className="navigation-list">
                            <li className="list-item-wrap">
                                <a href="/" className="list-item-link">
                                    <Feed height="20" className="mr-10" />
                                    <span className="menu-item-text">Feed</span>
                                </a>
                            </li>
                            <li className="list-item-wrap">
                                <a href="/" className="list-item-link">
                                    <Rocket height="20" className="mr-10" />
                                    <span className="menu-item-text">
                                        Launch
                                    </span>
                                </a>
                            </li>
                            <li className="list-item-wrap">
                                <a href="/" className="list-item-link">
                                    <Suitcase height="20" className="mr-10" />
                                    <span className="menu-item-text">Jobs</span>
                                </a>
                            </li>
                            <li className="list-item-wrap">
                                <a href="/" className="list-item-link">
                                    <Console height="20" className="mr-10" />
                                    <span className="menu-item-text">
                                        Account
                                    </span>
                                </a>
                            </li>

                            <Button
                                className="p-8 col moyo-button mt-10 flex-row"
                                size={"large"}
                                onClick={() => {
                                    isModalOpen
                                        ? setisModalOpen(false)
                                        : setisModalOpen(true);
                                }}
                                style={{
                                    paddingLeft: "30px",
                                    paddingRight: "30px",
                                }}
                                label=""
                            >
                                <span className="menu-item-text">Commit</span>
                            </Button>
                        </ul>
                    </nav>
                    <main className="moyo-feed">
                        <PostCard
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ipsam voluptatem sint id minima ipsum magnam molestiae non
				beatae mollitia obcaecati aliquid temporibus, sed cumque sunt
				laborum voluptates eaque? Sit repudiandae aut officiis
				reiciendis non, minus quibusdam consequuntur hic iste officia
				excepturi, possimus debitis vero corporis fugiat et impedit
				totam maxime?"
                            profilePicture={profile}
                            name={"Desmond Nyamador"}
                            datePosted={"20th June"}
                            likes={20}
                            comments={10}
                            code={{
                                "main.js": code1,
                                "second.js": code2,
                            }}
                            likeCount={4040}
                            commentCount={340}
                            isLiked={true}
                        />
                        <PostCard
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Ipsam voluptatem sint id minima ipsum magnam molestiae non
				beatae mollitia obcaecati aliquid temporibus, sed cumque sunt
				laborum voluptates eaque? Sit repudiandae aut officiis
				reiciendis non, minus quibusdam consequuntur hic iste officia
				excepturi, possimus debitis vero corporis fugiat et impedit
				totam maxime?"
                            profilePicture={profile}
                            name={"Desmond Nyamador"}
                            datePosted={"20th June"}
                            likes={20}
                            comments={10}
                            code={{
                                "main.js": code1,
                                "second.js": code2,
                            }}
                            likeCount={4040}
                            commentCount={340}
                            isLiked={true}
                        />
                    </main>

                    <aside className="moyo-extras"></aside>
                </div>
                {isModalOpen ? (
                    <Modal style={{ position: "absolute", top: "0" }}>
                        <div className="modal-wrap"></div>
                    </Modal>
                ) : (
                    <div />
                )}
            </div>
        </>
    );
};

export default Homepage;
