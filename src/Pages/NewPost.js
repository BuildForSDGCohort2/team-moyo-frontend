import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Navigation } from "./Homepage";
import "./NewPost.css";

function PostCreator() {
    return (
        <div className="post-creator-wrap">
            <section className="post-creator-heading">
                <h1>New Post</h1>
            </section>

            <div className="post-body">
                <TextareaAutosize className="post-textarea" />
            </div>
        </div>
    );
}

function NewPost() {
    return (
        <div className="post-page-container">
            <Navigation />
            <PostCreator />
        </div>
    );
}

export default NewPost;
