import React, { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import { SudokuTable } from './SudokuTable';
import { Timer } from './Timer';

interface IProps {
  timer: string;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export const Sudoku: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <h1>SUDOKU</h1>
      <SudokuTable />
      <Button variant="outline-success" onClick={() => props.setIsMenu(true)}>
        MENU
      </Button>
      <Timer action={props.timer} />
    </>
  );
};
