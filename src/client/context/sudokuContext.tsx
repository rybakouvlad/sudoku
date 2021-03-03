import React, { useReducer, useContext, useState, useCallback } from 'react';
import { createContext } from 'react';
import { reducer } from '../hooks/reduce.hook';
import { getSudoku, ISudoku } from '../helpers/sudoku';

export const SudokuContext = createContext<{
  state: ISudoku[][];
  dispatch: React.Dispatch<any>;
  // isHelp: boolean;
  // setIsHelp: Dispatch<SetStateAction<boolean>>;
  active: IPosition;
  setActive: React.Dispatch<IPosition>;
  getHelp(): void;
  getAll(): void;
}>(null);

interface IPosition {
  x: number;
  y: number;
}
interface IProps {
  children: React.ReactNode;
}

export const useSudoku = () => {
  return useContext(SudokuContext);
};

export const SudokuProvider: React.FC = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, getSudoku());
  // const [isHelp, setIsHelp] = useState(false);
  const [active, setActive] = useState<IPosition>(null);
  const getHelp = useCallback(() => {
    if (active !== null) {
      dispatch({
        type: 'help',
        payload: {
          x: active.x,
          y: active.y,
        },
      });
    }
    // setIsHelp(false);
  }, [active]);

  const getAll = () => {
    dispatch({ type: 'show-all' });
  };

  return (
    <SudokuContext.Provider value={{ state, dispatch, active, setActive, getHelp, getAll }}>{children}</SudokuContext.Provider>
  );
};
