import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const PopupModal = ({ title, body, show, setShow, callBack }) => {

  const handleClose = () => {
    setShow(false);
    callBack();
  };

	return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Okay
        </Button>
      </Modal.Footer>

    </Modal>
	);
};

export default PopupModal;