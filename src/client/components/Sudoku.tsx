import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import { SudokuTable } from './SudokuTable';
import { useSudoku } from '../context/sudokuContext';
import { useGame } from '../hooks/game.hook';
import { Score } from './Score';

interface IProps {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export const Sudoku: React.FC<IProps> = (props: IProps) => {
  const { handlePause } = useGame();
  const { getHelp, getAll } = useSudoku();
  const callMenu = (): void => {
    props.setIsMenu(true);
    handlePause();
  };

  return (
    <div className="sudoku_wrapper">
      <h1>SUDOKU</h1>
      <Score />
      <SudokuTable />
      <div className="group_buttons">
        <Button variant="outline-success" onClick={callMenu}>
          MENU
        </Button>
        <Button variant="outline-success" onClick={getHelp}>
          GET HELP
        </Button>
        <Button variant="outline-success" onClick={getAll}>
          GET ALL
        </Button>
      </div>
    </div>
  );
};
