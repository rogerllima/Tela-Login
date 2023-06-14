import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/User";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = (email: string, password: string) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db")!);

        const hasUser = usersStorage.filter((savedUser: string) => savedUser === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem('user_token', JSON.stringify({ email, token }))
                setUser({ email: email });
                return;
            }
        }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
}