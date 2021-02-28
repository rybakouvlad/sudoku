import React, { useEffect, useState } from 'react';
import { MenuSudoku } from './MenuSudoku';
import { actionTimer } from './Timer';
import { SudokuProvider } from '../context/sudokuContext';
import { Sudoku } from './Sudoku';
export const StartGame: React.FC = () => {
  const [isMenu, setIsMenu] = useState(true);
  const [timer, setTimer] = useState(actionTimer.STOP);

  const changeMenuStatus = (status: boolean): void => {
    setIsMenu(status);
  };

  useEffect(() => {
    isMenu ? setTimer(actionTimer.PAUSE) : setTimer(actionTimer.RESUME);
  }, [isMenu]);

  return (
    <>
      <SudokuProvider>
        {isMenu ? <MenuSudoku changeMenuStatus={changeMenuStatus} /> : <Sudoku timer={timer} setIsMenu={setIsMenu} />}
      </SudokuProvider>
    </>
  );
};
