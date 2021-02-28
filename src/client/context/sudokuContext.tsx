import React, { useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from '../hooks/reduce.hook';
import { getSudoku } from '../helpers/sudoku';

export const SudokuContext = createContext(null);

interface IProps {
  children: React.ReactNode;
}

export const SudokuProvider: React.FC<IProps> = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, getSudoku());
  return <SudokuContext.Provider value={{ state, dispatch }}>{children}</SudokuContext.Provider>;
};
