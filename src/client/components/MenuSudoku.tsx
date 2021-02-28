import React, { useCallback, useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useGame } from '../hooks/game.hook';
import { useSudoku } from '../context/sudokuContext';
import { useMove } from '../context/move.context';
import { Spinner } from 'react-bootstrap';
interface IProps {
  changeMenuStatus(status: boolean): void;
}

export const MenuSudoku: React.FC<IProps> = (props: IProps) => {
  const { handleStart, handleResume, handleReset, setTimer } = useGame();
  const { dispatch } = useSudoku();
  const { setMoves } = useMove();
  const [isLoading, setIsLoading] = useState(true);
  const [isNew, setIsNew] = useState(false);
  console.log('MENU');

  const checkLocal = useCallback(() => {
    if (localStorage.getItem('game_time') && isLoading) {
      setTimer(parseInt(localStorage.getItem('game_time')));
      setMoves(parseInt(localStorage.getItem('game_moves')));
      dispatch({ type: 'set', payload: JSON.parse(localStorage.getItem('game_data')) });
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkLocal();
    console.log('kuku');
  }, [checkLocal]);

  const newGame = (): void => {
    if (isNew) {
      setIsNew(false);
    } else {
      localStorage.clear();
      handleReset();
      setMoves(0);
      dispatch({ type: 'new' });
      setIsNew(true);
    }
    handleStart();
    props.changeMenuStatus(false);
  };

  const resumeGame = (): void => {
    props.changeMenuStatus(false);
    handleResume();
  };

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <>
      <div className="menu">
        <ButtonGroup vertical>
          <h1>MENU</h1>
          <Button variant="outline-success" onClick={newGame}>
            NEW GAME
          </Button>
          <Button variant="outline-success" onClick={resumeGame}>
            RESUME GAME
          </Button>
          <h1>Music</h1>
          <h1>Sounds</h1>
        </ButtonGroup>
      </div>
    </>
  );
};
