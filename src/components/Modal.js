import React from "react";
import "./Modal.css";

const Modal = ({ children, ...props }) => {
    return <div className="modal-container">{children}</div>;
};

export default Modal;
