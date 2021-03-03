import React, { useState } from 'react';
import { MenuButtons } from './MenuButtons';
import { TableResult } from './TableResult';
interface IProps {
  changeMenuStatus(status: boolean): void;
}

export const MenuSudoku: React.FC<IProps> = (props: IProps) => {
  const [isTable, setIsTable] = useState(false);
  return (
    <>
      {isTable ? (
        <TableResult setIsTable={setIsTable} />
      ) : (
        <MenuButtons changeMenuStatus={props.changeMenuStatus} setIsTable={setIsTable} />
      )}
    </>
  );
};
