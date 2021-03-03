import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useGame } from '../hooks/game.hook';
import { useSudoku } from '../context/sudokuContext';
import { useMove } from '../context/move.context';
import { Spinner } from 'react-bootstrap';
import { useAuth } from '../context/auth.context';
import { Sounds } from './Sounds';
interface IProps {
  changeMenuStatus(status: boolean): void;
  setIsTable: Dispatch<SetStateAction<boolean>>;
}

export const MenuButtons: React.FC<IProps> = (props: IProps) => {
  const { handleStart, handleResume, handleReset, setTimer } = useGame();
  const { dispatch } = useSudoku();
  const { setMoves } = useMove();
  const { isLocal, setIsLocal } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isNew, setIsNew] = useState(false);

  const checkLocal = useCallback(() => {
    if (isLocal) {
      setTimer(parseInt(localStorage.getItem('game_time')));
      setMoves(parseInt(localStorage.getItem('game_moves')));
      dispatch({ type: 'set', payload: JSON.parse(localStorage.getItem('game_data')) });
      dispatch({ type: 'clear' });
      setIsLocal((loc) => !loc);
      setIsLoading(false);
      resumeGame();
    }
    setIsLoading(false);
  }, [isLocal]);

  useEffect(() => {
    checkLocal();
  }, [isLocal]);

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
          <Button variant="secondary" className="mt-2" onClick={newGame}>
            NEW GAME
          </Button>
          <Button variant="secondary" className="mt-2" onClick={resumeGame}>
            RESUME GAME
          </Button>

          <Sounds />
          <Button variant="secondary" className="mt-2" onClick={() => props.setIsTable(true)}>
            BEST RESULT
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
