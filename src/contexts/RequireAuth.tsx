import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../pages/Login";
import Private from "../pages/Private";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

   // if (!auth) {
     //   return <Login />
    //} else {
        return <Private />
  //  }
//
}