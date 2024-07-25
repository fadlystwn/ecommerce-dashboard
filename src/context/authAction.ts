import { AuthAction } from "../types/auth";

// Action Types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const login = (user: any): AuthAction => ({
    type: LOGIN,
    payload: user
});

export const logout = (): AuthAction => ({
    type: LOGOUT
});
