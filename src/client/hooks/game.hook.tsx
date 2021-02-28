import React, { useState, useRef, createContext, useContext, Dispatch, SetStateAction } from 'react';

interface IGame {
  timer: number;
  isActive: boolean;
  isPaused: boolean;
  handleStart(): void;
  handlePause(): void;
  handleResume(): void;
  handleReset(): void;
  setTimer: Dispatch<SetStateAction<number>>;
}

interface IProps {
  children: React.ReactNode;
}
export const GameContext = createContext<IGame>(null);

export const useGame = () => {
  return useContext(GameContext);
};

export const GameProvider: React.FC = ({ children }: IProps) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return (
    <GameContext.Provider
      value={{
        timer,
        setTimer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleResume,
        handleReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
