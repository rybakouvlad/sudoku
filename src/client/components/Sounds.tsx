import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useSounds } from '../context/sounds.context';

export const Sounds: React.FC = () => {
  const { isSound, isMusic, volume, musicHandler, increaseVolume, decreaseVolume, soundHandler } = useSounds();

  return (
    <>
      <Button
        className="mt-2"
        onClick={musicHandler}
        variant={`${isMusic ? 'outline-success' : 'outline-danger'}`}
      >{`Music ${isMusic ? 'ON' : 'OFF'}`}</Button>
      <Button
        className="mt-2"
        onClick={soundHandler}
        variant={`${isSound ? 'outline-success' : 'outline-danger'}`}
      >{`Sounds ${isSound ? 'ON' : 'OFF'}`}</Button>
      <ButtonGroup className="mt-2" size="sm">
        <Button disabled={volume === 1 ? true : false} onClick={increaseVolume}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button>
        <Button disabled={volume === 0 ? true : false} onClick={decreaseVolume}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Button>
      </ButtonGroup>
    </>
  );
};
