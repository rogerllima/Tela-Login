import { createContext, useContext } from "react";
import { User } from "../types/User";

type AuthContextType = {
    user: User | null;
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const useAuthContext = () => {
    return useContext(AuthContext)
}
