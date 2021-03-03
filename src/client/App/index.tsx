import React from 'react';
import { StartGame } from '../components/StartGame';
import { AuthProvider } from '../context/auth.context';
import { SoundsProvider } from '../context/sounds.context';
import { Footer } from '../components/Footer';
// import '../css/index.css';
import '../css/index.scss';

export const App = () => {
  return (
    <AuthProvider>
      <SoundsProvider>
        <React.Fragment>
          <StartGame />
          <Footer />
        </React.Fragment>
      </SoundsProvider>
    </AuthProvider>
  );
};
