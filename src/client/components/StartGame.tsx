import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MenuSudoku } from './MenuSudoku';
import { SudokuTable } from './SudokuTable';
import { Timer, actionTimer } from './Timer';

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
      {isMenu ? <MenuSudoku changeMenuStatus={changeMenuStatus} /> : <SudokuTable />}
      <Button variant="outline-success" onClick={() => setIsMenu(true)}>
        MENU
      </Button>
      <Timer action={timer} />
    </>
  );
};
