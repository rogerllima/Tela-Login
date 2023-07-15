import { useContext } from "react";
import { AuthContext, useAuthContext } from "./AuthContext";
import { Login } from "../../pages/User/Login";
import Private from "../../pages/User/Private";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuthContext();

  if (!auth.loggedIn) {
    return <Login />
  } else {
    return <Private />
  }

}