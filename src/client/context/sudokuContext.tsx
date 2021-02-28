import React, { useReducer, useContext } from 'react';
import { createContext } from 'react';
import { reducer } from '../hooks/reduce.hook';
import { getSudoku, ISudoku } from '../helpers/sudoku';

export const SudokuContext = createContext<{
  state: ISudoku[][];
  dispatch: React.Dispatch<any>;
}>(null);

interface IProps {
  children: React.ReactNode;
}

export const useSudoku = () => {
  return useContext(SudokuContext);
};

export const SudokuProvider: React.FC = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, getSudoku());
  return <SudokuContext.Provider value={{ state: state, dispatch: dispatch }}>{children}</SudokuContext.Provider>;
};
