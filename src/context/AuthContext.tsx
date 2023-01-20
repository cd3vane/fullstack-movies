import { createContext, useEffect, useReducer } from "react";
import { AuthState, AuthReducer, initialState } from "../reducers/AuthReducer";
import { Credentials } from "../types";

export const AuthContext = createContext<AuthState>(initialState);
export const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    console.log("effects");
  }, []);

  const login = (loginPayload: Credentials) => {
    dispatch({ type: "REQUEST_LOGIN", payload: loginPayload });
    if (loginPayload.email.includes("@") && loginPayload.password.length > 8) {
      dispatch({ type: "LOGIN_SUCCESS", payload: loginPayload });
    } else {
      dispatch({
        type: "LOGIN_ERROR",
        error: "There was an error logging you in",
      });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        userDetails: state.userDetails,
        token: state.token,
        loading: false,
        errorMessage: "",
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
