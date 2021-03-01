import React, { FC, useCallback, useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import { SudokuContext } from '../context/sudokuContext';
import { ISudoku } from '../helpers/sudoku';
import { useMove } from '../context/move.context';
import { useSounds } from '../context/sounds.context';
interface IRow {
  cell: ISudoku;
}

export const SS: FC<IRow> = (props: IRow) => {
  console.log('CELL');
  const { dispatch } = useContext(SudokuContext);
  const [isActive, setIsActive] = useState(false);
  const { incrementMoves } = useMove();
  const { soundPlay } = useSounds();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = null;
    }

    incrementMoves();
    dispatch({ type: 'change', payload: { cell: props.cell, value: value } });
  }, []);

  const focusHandler = () => {
    soundPlay();
    dispatch({ type: 'active', payload: { cell: props.cell, focus: true } });
    setIsActive(true);
  };

  const blurHandler = () => {
    dispatch({ type: 'active', payload: { cell: props.cell, focus: false } });
    setIsActive(false);
  };

  return (
    <Col className="form">
      <input
        style={{ backgroundColor: isActive ? '#6f88c4' : null, color: props.cell.isReadOnly ? '#2b241f' : null }}
        className={`${props.cell.isActive ? 'activeCell' : 'inActiveCell'}`}
        maxLength={1}
        value={props.cell.value ? props.cell.value : ''}
        readOnly={props.cell.isReadOnly}
        onChange={handleChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    </Col>
  );
};

export const SudokuSection = React.memo(SS);
