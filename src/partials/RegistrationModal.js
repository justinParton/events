import React from "react";
import { Modal } from "react-bootstrap";

const RegistrationModal = (props) => {
  const { show, handleClose, size, modalTitle } = props;
  return (
    <Modal
      fullscreen="true"
      onClose={handleClose}
      backdrop="static"
      size={size}
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
        <p className="btn-modal-close" onClick={() => handleClose()}>
          <i className="fa fa-times text-danger"></i>
        </p>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default RegistrationModal;
