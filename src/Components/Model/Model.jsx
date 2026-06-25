import React from "react";
import "./Model.css";

const Modal = ({ children, isOpen, closeModal }) => {
	
	if (!isOpen) return null;
 
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} >
          ✕
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;