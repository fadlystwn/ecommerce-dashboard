import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { AuthState, AuthAction } from "../types/auth";
import { authReducer } from '../context/AuthReducers';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};