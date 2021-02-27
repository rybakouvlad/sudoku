import React from 'react';
import { StartGame } from '../components/StartGame';
// import '../css/index.css';
import '../css/index.scss';

export const App = () => {
  return (
    <React.Fragment>
      <h1 className="one">HELLO WORLD</h1>
      <StartGame />
    </React.Fragment>
  );
};
