import { Credentials } from "../types";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") || "").user
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") || "").auth_token
  : "";

export type AuthState = {
  userDetails: string;
  token: string;
  loading: boolean;
  errorMessage: string;
};

type ReducerAction =
  | { type: "REQUEST_LOGIN"; payload: Credentials }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | { type: "LOGOUT" }
  | { type: "LOGIN_ERROR"; error: string };

export const initialState: AuthState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: "",
};
export const AuthReducer = (initialState: AuthState, action: ReducerAction) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};
