import React, { useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { useMove } from '../context/move.context';
import { useGame } from '../hooks/game.hook';
import axios from 'axios';

export const WinModal: React.FC = () => {
  const [name, setName] = useState('');
  const { moves } = useMove();
  const { timer } = useGame();
  const submitHandler = async () => {
    try {
      const response = await axios.post('http://178.124.178.250:3030/api/result/set', {
        name: name,
        moves: moves,
        time: timer,
      });
    } catch (error) {}
    setName('');
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>You WIN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please enter your name</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Your username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputGroup.Append>
            <Button onClick={submitHandler} variant="outline-secondary">
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Modal.Body>
    </>
  );
};
