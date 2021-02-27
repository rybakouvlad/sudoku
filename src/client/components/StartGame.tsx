import React, { useState } from 'react';
import { MenuSudoku } from './MenuSudoku';
import { SudokuTable } from './SudokuTable';

export const StartGame: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  const changeMenuStatus = (status: boolean): void => {
    setIsMenu(status);
  };

  return <>{isMenu ? <SudokuTable /> : <MenuSudoku changeMenuStatus={changeMenuStatus} />}</>;
};
