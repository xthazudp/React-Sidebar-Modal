import React from "react";
// import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <div className={`modal-overlay show-modal`}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn">X</button>
      </div>
    </div>
  );
};

export default Modal;
