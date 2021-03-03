import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';
import { SudokuTable } from './SudokuTable';
import { useSudoku } from '../context/sudokuContext';
import { useGame } from '../hooks/game.hook';
import { Score } from './Score';
import { ResultModal } from './ResultModal';
import { useMove } from '../context/move.context';
import { useHotkeys } from 'react-hotkeys-hook';
import { useSounds } from '../context/sounds.context';
interface IProps {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export const Sudoku: React.FC<IProps> = (props: IProps) => {
  const { handlePause } = useGame();
  const { musicHandler, soundHandler } = useSounds();
  const { getHelp, getAll, checkSolution, checkMoves } = useSudoku();
  const { incrementMoves } = useMove();
  const [show, setShow] = useState(false);
  const [isSolve, setIsSolve] = useState(false);
  const callMenu = (): void => {
    props.setIsMenu(true);
    handlePause();
  };
  const helpHandler = () => {
    getHelp();
    incrementMoves();
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
  useHotkeys('ctrl+f', getAll);
  useHotkeys('ctrl+m', callMenu);
  useHotkeys('ctrl+d', checkDone);
  useHotkeys('ctrl+e', musicHandler);
  useHotkeys('ctrl+r', soundHandler);

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
