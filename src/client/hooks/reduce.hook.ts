import { ISudoku, getSudoku } from '../helpers/sudoku';
import produce from 'immer';

export const actionTypeSudoku = {
  NEW_GAME: 'new',
  CHANGE: 'change',
  ACTIVE: 'active',
  SET: 'set',
};

export const reducer = (state: ISudoku[][], action: any) => {
  return produce(state, (produce) => {
    if (action.type === actionTypeSudoku.CHANGE) {
      produce[action.payload.cell.row][action.payload.cell.col].value = action.payload.value;
    }
    if (action.type === actionTypeSudoku.NEW_GAME) {
      return getSudoku();
    }
    if (action.type === actionTypeSudoku.SET) {
      return action.payload;
    }
    if (action.type === actionTypeSudoku.ACTIVE) {
      // Подумать над всеми одинаковыми цифрами
      for (let i = 0; i < 9; i++) {
        produce[action.payload.cell.row][i].isActive = action.payload.focus;
        produce[i][action.payload.cell.col].isActive = action.payload.focus;
      }
      produce.forEach((e) => {
        e.forEach((element) => {
          if (element.section === action.payload.cell.section) {
            element.isActive = action.payload.focus;
          }
        });
      });
    }
  });
};
