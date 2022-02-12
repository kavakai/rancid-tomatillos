import React from "react";
import './Modal.css'

const Modal = ({ hideModal, show, trailer }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <iframe className='trailer' src={trailer}></iframe>
        <button className='close-modal' type="button" onClick={() => hideModal()}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal