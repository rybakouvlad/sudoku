import React, { useEffect } from 'react';
import { useMove } from '../context/move.context';
import { useSudoku } from '../context/sudokuContext';
import { useGame } from '../hooks/game.hook';
import { getTimes } from '../helpers/time';

export const Score: React.FC = () => {
  const { moves } = useMove();
  const { state } = useSudoku();
  const { timer } = useGame();

  useEffect(() => {
    localStorage.setItem('game_time', timer.toString());
    localStorage.setItem('game_moves', moves.toString());
    localStorage.setItem('game_data', JSON.stringify(state));
  }, [timer]);

  return (
    <div className="score">
      <div>{getTimes(timer)}</div>
      <div>{`Moves: ${moves}`} </div>
    </div>
  );
};
