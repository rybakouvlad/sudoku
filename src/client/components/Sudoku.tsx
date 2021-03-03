import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';
import { SudokuTable } from './SudokuTable';
import { useSudoku } from '../context/sudokuContext';
import { useGame } from '../hooks/game.hook';
import { Score } from './Score';
import { ResultModal } from './ResultModal';
import { useMove } from '../context/move.context';
interface IProps {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export const Sudoku: React.FC<IProps> = (props: IProps) => {
  const { handlePause } = useGame();
  const { getHelp, getAll, checkSolution, checkMoves } = useSudoku();
  const { incrementMoves } = useMove();
  const [show, setShow] = useState(false);
  const [isSolve, setIsSolve] = useState(false);
  const callMenu = (): void => {
    props.setIsMenu(true);
    handlePause();
  };

  const checkDone = () => {
    if (checkSolution() && !checkMoves()) {
      setIsSolve(true);
      setShow(true);
    } else {
      setIsSolve(false);
      setShow(true);
    }
  };

  const helpHandler = () => {
    getHelp();
    incrementMoves();
  };

  return (
    <div className="sudoku_wrapper">
      <ResultModal isSolve={isSolve} show={show} setShow={setShow} />
      <h1>SUDOKU</h1>
      <Score />
      <SudokuTable />
      <div className="group_buttons">
        <Button variant="outline-success" onClick={callMenu}>
          MENU
        </Button>
        <Button variant="outline-success" onClick={helpHandler}>
          GET HELP
        </Button>
        <Button variant="outline-success" onClick={getAll}>
          GET ALL
        </Button>
        <Button variant="outline-success" onClick={checkDone}>
          CHECK SOLVE
        </Button>
      </div>
    </div>
  );
};
