import React, { useState } from 'react';
import { MenuSudoku } from './MenuSudoku';
import { GameProvider } from '../hooks/game.hook';
import { SudokuProvider } from '../context/sudokuContext';
import { Sudoku } from './Sudoku';
import { MoveProvider } from '../context/move.context';

export const StartGame: React.FC = () => {
  const [isMenu, setIsMenu] = useState(true);

  const changeMenuStatus = (status: boolean): void => {
    setIsMenu(status);
  };

  return (
    <>
      <GameProvider>
        <SudokuProvider>
          <MoveProvider>
            {isMenu ? <MenuSudoku changeMenuStatus={changeMenuStatus} /> : <Sudoku setIsMenu={setIsMenu} />}
          </MoveProvider>
        </SudokuProvider>
      </GameProvider>
    </>
  );
};
