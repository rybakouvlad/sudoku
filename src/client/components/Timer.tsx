import React from 'react';
import { getTimes } from '../helpers/time';

interface IProps {
  timer: number;
}

export const Timer: React.FC<IProps> = (props: IProps) => {
  console.log('TIMER');

  return <h1>{getTimes(props.timer)}</h1>;
};
