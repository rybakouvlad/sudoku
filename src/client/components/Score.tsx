import React, { useEffect } from 'react';
import { useMove } from '../context/move.context';
import { useSudoku } from '../context/sudokuContext';
import { useGame } from '../hooks/game.hook';
import { getTimes } from '../helpers/time';
import { ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';

export const Score: React.FC = () => {
  const { moves } = useMove();
  const { state } = useSudoku();
  const { timer } = useGame();

  useEffect(() => {
    localStorage.setItem('game_time', timer.toString());
    localStorage.setItem('game_moves', moves.toString());
    localStorage.setItem('game_data', JSON.stringify(state));
  }, [timer]);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">HOT KEYS</Popover.Title>
      <Popover.Content>
        <ListGroup>
          <ListGroup.Item>
            <strong>ctrl+f</strong>
            <span> Get all sudoku</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ctrl+m</strong>
            <span> Open menu</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ctrl+f</strong>
            <span> Check solution</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ctrl+e</strong>
            <span> Music ON/OF</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ctrl+r</strong>
            <span> Sound ON/OF</span>
          </ListGroup.Item>
        </ListGroup>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="score">
      <div>{getTimes(timer)}</div>
      <div className="help_button">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="cornflowerblue"
              d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
            />
          </svg>
        </OverlayTrigger>
      </div>
      <div>{`Moves: ${moves}`} </div>
    </div>
  );
};
