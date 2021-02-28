import React, { FC, useReducer } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getSudoku } from '../helpers/sudoku';
import { SudokuSection } from './SudokuSectiom';
import { SudokuContext } from '../context/sudokuContext';
import { reducer } from '../hooks/reduce.hook';
export const SudokuTable: FC = () => {
  const [state, dispatch] = useReducer(reducer, getSudoku());
  console.log('TABLE');
  return (
    <SudokuContext.Provider value={{ state, dispatch }}>
      <Container className="container">
        {state.map((el, index) => {
          return (
            <Row key={index} className="justify-content-md-center row">
              {el.map((element, i) => {
                return <SudokuSection key={i} cell={element} />;
              })}
            </Row>
          );
        })}
      </Container>
    </SudokuContext.Provider>
  );
};
