import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useTimer from '../hooks/timer.hook';
import { getTimes } from '../helpers/time';

interface IProps {
  action: string;
}

export const actionTimer = {
  START: 'start',
  PAUSE: 'pause',
  RESUME: 'resume',
  STOP: 'stop',
};

export const Timer: React.FC<IProps> = (props: IProps) => {
  const { timer, handleStart, handlePause, handleReset, handleResume } = useTimer();
  useEffect(() => {
    switch (props.action) {
      case actionTimer.START:
        handleStart();
        break;
      case actionTimer.PAUSE:
        handlePause();
        break;
      case actionTimer.STOP:
        handleReset();
        break;
      case actionTimer.RESUME:
        handleResume();
        break;
      default:
        break;
    }
  }, [props.action]);
  return (
    <>
      <Button variant="outline-success" onClick={() => handleStart()}>
        start
      </Button>
      <h1>{getTimes(timer)}</h1>
    </>
  );
};
