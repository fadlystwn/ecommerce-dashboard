export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' };
