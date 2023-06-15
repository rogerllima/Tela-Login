import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/User";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('logged'))
            setLoggedIn(true);
    }, [])

    return (
        <AuthContext.Provider value={{ user, loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}