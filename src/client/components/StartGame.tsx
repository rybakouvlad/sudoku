import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MenuSudoku } from './MenuSudoku';
import { SudokuTable } from './SudokuTable';
import { Timer, actionTimer } from './Timer';

export const StartGame: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [timer, setTimer] = useState(actionTimer.STOP);

  const changeMenuStatus = (status: boolean): void => {
    setIsMenu(status);
  };

  useEffect(() => {
    isMenu ? setTimer(actionTimer.PAUSE) : setTimer(actionTimer.RESUME);
  }, [isMenu]);

  return (
    <>
      {isMenu ? <SudokuTable /> : <MenuSudoku changeMenuStatus={changeMenuStatus} />}
      <Button variant="outline-success" onClick={() => setIsMenu(true)}>
        Success
      </Button>
      <Timer action={timer} />
    </>
  );
};
