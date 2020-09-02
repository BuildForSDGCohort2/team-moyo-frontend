import React from "react";

export const ProfileImage = props => {
    return (
        <div className="image-container">
            <img
                className="avatar-image"
                src={props.avatar}
                alt="avatar-image"
            />
        </div>
    );
};
