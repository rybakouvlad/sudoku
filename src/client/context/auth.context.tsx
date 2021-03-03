import React, { useContext, useState, createContext, useEffect, Dispatch, SetStateAction } from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IAuth {
  isLocal: boolean;
  setIsLocal: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuth>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }: IProps) => {
  const [isLocal, setIsLocal] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('game_time')) {
      setIsLocal(true);
    }
  }, []);
  return <AuthContext.Provider value={{ isLocal, setIsLocal }}>{children}</AuthContext.Provider>;
};
