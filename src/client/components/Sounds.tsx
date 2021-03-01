import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useSounds } from '../context/sounds.context';

export const Sounds: React.FC = () => {
  const { isSound, isMusic, volume, musicHandler, increaseVolume, decreaseVolume, soundHandler } = useSounds();

  return (
    <>
      <Button onClick={musicHandler} variant={`${isMusic ? 'outline-success' : 'outline-danger'}`}>{`Music ${
        isMusic ? 'ON' : 'OFF'
      }`}</Button>
      <Button onClick={soundHandler} variant={`${isSound ? 'outline-success' : 'outline-danger'}`}>{`Sounds ${
        isSound ? 'ON' : 'OFF'
      }`}</Button>
      <ButtonGroup size="sm">
        <Button disabled={volume === 1 ? true : false} onClick={increaseVolume}>
          PLUS
        </Button>
        <Button disabled={volume === 0 ? true : false} onClick={decreaseVolume}>
          MINUS
        </Button>
      </ButtonGroup>
    </>
  );
};
