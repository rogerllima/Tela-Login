import { useContext } from "react";
import { AuthContext, useAuthContext } from "./AuthContext";
import { Login } from "../pages/Login";
import Private from "../pages/Private";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuthContext();

  if (!auth.loggedIn) {
    return <Login />
  } else {
    return <Private />
  }

}