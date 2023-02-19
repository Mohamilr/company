import React, { createContext, FC, ReactNode } from 'react';

interface Auth {
  email: string;
  password: string;
}

const defaultCredentials = {
  email: 'elon@spacex.com',
  password: 'elonspacex',
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<Auth>(defaultCredentials);

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  return (
    <AuthContext.Provider value={defaultCredentials}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
