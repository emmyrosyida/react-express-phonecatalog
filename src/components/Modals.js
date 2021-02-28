import { Modal } from "react-bootstrap";
import React from "react";
import { Button } from "react-bootstrap";

const Modals = ({ show, alert, hide, text, body, title, click }) => {
  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={hide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alert}
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={click}>
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
