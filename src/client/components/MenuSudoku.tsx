import React from 'react';
import { Button } from 'react-bootstrap';

interface IProps {
  changeMenuStatus(status: boolean): void;
}

export const MenuSudoku: React.FC<IProps> = (props: IProps) => {
  return (
    <Button variant="outline-success" onClick={() => props.changeMenuStatus(true)}>
      Success
    </Button>
  );
};
