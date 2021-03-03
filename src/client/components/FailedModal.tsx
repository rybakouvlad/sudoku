import React from 'react';
import { Modal } from 'react-bootstrap';

export const FailedModal: React.FC = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Check you solution</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please check your solution, you have mistaks</Modal.Body>
    </>
  );
};
