import sudoku from 'sudoku';

export interface ISudoku {
  value: number;
  row: number;
  col: number;
  section: number;
  isReadOnly: boolean;
  tryValue: number;
  isActive: boolean;
}

const getSection = (x: number, y: number): number => {
  const n = Math.trunc(x / 3) * 3 + Math.trunc(y / 3);
  return n;
};

export const getSudoku = (): Array<Array<ISudoku>> => {
  const resultSudoku = sudoku;
  const start = resultSudoku.makepuzzle();
  const final = resultSudoku.solvepuzzle(start);
  // console.log(sudoku.ratepuzzle(start, 1));
  const result = [];
  for (let i = 0; i < 9; i++) {
    const row: Array<ISudoku> = [];
    for (let n = 0; n < 9; n++) {
      row.push({
        value: start[n + i * 9] ? start[n + i * 9] + 1 : null,
        row: i,
        col: n,
        section: getSection(i, n),
        isReadOnly: start[n + i * 9] ? true : false,
        tryValue: final[n + i * 9] + 1,
        isActive: false,
      });
    }
    result.push(row);
  }

  return result;
};
