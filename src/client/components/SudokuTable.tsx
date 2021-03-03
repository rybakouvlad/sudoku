import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { SudokuSection } from './SudokuSectiom';
import { useSudoku } from '../context/sudokuContext';

const SudokuTableMemo: FC = () => {
  const { state } = useSudoku();

  return (
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
  );
};

export const SudokuTable = React.memo(SudokuTableMemo);
