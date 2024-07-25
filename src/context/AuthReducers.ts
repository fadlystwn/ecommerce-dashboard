import { AuthState, AuthAction } from "../types/auth";
import { LOGIN, LOGOUT } from "../context/authAction";

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state;
  }
}
