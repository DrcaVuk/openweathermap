import React from "react";

import "./Modal.css";

const Modal = props => {
    return (
        <div className="modal_background">
        <div className="modal">{props.children}</div>
        </div>
    )
}

export default Modal;