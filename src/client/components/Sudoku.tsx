import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { SudokuTable } from './SudokuTable';
import { Timer } from './Timer';
import { useGame } from '../hooks/game.hook';
import { useMove } from '../context/move.context';
import { useSudoku } from '../context/sudokuContext';
interface IProps {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export const Sudoku: React.FC<IProps> = (props: IProps) => {
  const { handlePause, timer } = useGame();
  const { moves } = useMove();
  const { state } = useSudoku();
  useEffect(() => {
    localStorage.setItem('game_time', timer.toString());
    localStorage.setItem('game_moves', moves.toString());
    localStorage.setItem('game_data', JSON.stringify(state));
  }, [timer]);

  const callMenu = (): void => {
    props.setIsMenu(true);
    handlePause();
  };

  return (
    <>
      <h1>SUDOKU</h1>
      <SudokuTable />
      <Button variant="outline-success" onClick={callMenu}>
        MENU
      </Button>
      <Timer timer={timer} />
      <h1>{`Moves:${moves}`} </h1>
    </>
  );
};
