import React, { useContext, useState, createContext } from 'react';

interface IProps {
  children: React.ReactNode;
}

interface ISounds {
  isMusic: boolean;
  isSound: boolean;
  volume: number;
  soundPlay(): void;
  musicHandler(): void;
  changeSound(): void;
  increaseVolume(): void;
  decreaseVolume(): void;
  soundHandler(): void;
}

const MUSICURL = 'http://streaming.tdiradio.com:8000/house.mp3';
const BUTTONSOUND = 'http://www.pachd.com/a/button/button4.wav';

const SoundsContext = createContext<ISounds>(null);

export const useSounds = () => {
  return useContext(SoundsContext);
};

export const SoundsProvider: React.FC = ({ children }: IProps) => {
  const [isMusic, setIsMusic] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [music] = useState(new Audio(MUSICURL));
  const [musicFocus] = useState(new Audio(BUTTONSOUND));
  function musicHandler() {
    if (isMusic === true) {
      music.pause();
      setIsMusic(false);
    } else {
      music.volume = volume;
      music.play();
      setIsMusic(true);
    }
  }
  function soundHandler() {
    if (isSound === true) {
      setIsSound(false);
    } else {
      setIsSound(true);
    }
  }
  const changeSound = () => {
    setIsMusic(!isMusic);
  };
  const increaseVolume = () => {
    const newV = volume + 0.1 > 1 ? 1 : volume + 0.1;
    music.volume = newV;
    setVolume(newV);
  };

  const decreaseVolume = () => {
    const newV = volume - 0.1 < 0 ? 0 : volume - 0.1;
    music.volume = newV;
    setVolume(newV);
  };

  function soundPlay() {
    if (!isSound) return;
    musicFocus.volume = volume;
    musicFocus.play();
  }

  return (
    <SoundsContext.Provider
      value={{
        isMusic,
        isSound,
        volume,
        musicHandler,
        changeSound,
        increaseVolume,
        decreaseVolume,
        soundPlay,
        soundHandler,
      }}
    >
      {children}
    </SoundsContext.Provider>
  );
};
