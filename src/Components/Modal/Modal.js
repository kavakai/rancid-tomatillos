import React from "react";
import './Modal.css'

const Modal = ({ hideModal, show, trailer }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  let source = trailer


  return (
    <div className={showHideClassName} onClick={() => hideModal()}>
      <section className="modal-main">
        <button>X</button>
        <iframe className='trailer' src={source} width='560' height='315' frameBorder='0' allow='autoplay' allowFullScreen></iframe>
      </section>
    </div>
  );
};

export default Modal