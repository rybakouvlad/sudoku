import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { getTimes } from '../helpers/time';
interface ITable {
  name: string;
  time: number;
  moves: number;
}

interface IProps {
  setIsTable: Dispatch<SetStateAction<boolean>>;
}

export const TableResult: React.FC<IProps> = (props: IProps) => {
  const [tableResult, setTableResul] = useState<ITable[]>([]);

  const getResults = async () => {
    try {
      const response = await axios.get('http://178.124.178.250:3030/api/result/get');

      setTableResul(
        response.data.sort((a: ITable, b: ITable) => {
          return a.time - b.time;
        }),
      );
    } catch (error) {}
  };

  useEffect(() => {
    getResults();
  }, []);

  const menuHandler = () => {
    props.setIsTable(false);
  };

  return (
    <>
      <Button className="ml-3 mb-3" onClick={menuHandler}>
        Back
      </Button>
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Moves</th>
            </tr>
          </thead>
          <tbody>
            {tableResult.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{getTimes(el.time)}</td>
                  <td>{el.moves}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
