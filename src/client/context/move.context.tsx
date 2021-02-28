import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IMove {
  moves: number;
  incrementMoves(): void;
  resetMoves(): void;
  setMoves: Dispatch<SetStateAction<number>>;
}

const MoveContext = createContext<IMove>(null);

export const useMove = () => {
  return useContext(MoveContext);
};

export const MoveProvider: React.FC = ({ children }: IProps) => {
  const [moves, setMoves] = useState(0);

  const incrementMoves = () => {
    console.log('kuku');

    setMoves((mv) => mv + 1);
  };

  const resetMoves = () => {
    setMoves(0);
  };
  return (
    <MoveContext.Provider value={{ moves, incrementMoves, resetMoves, setMoves }}>{children}</MoveContext.Provider>
  );
};
