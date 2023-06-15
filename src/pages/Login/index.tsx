import { useState } from "react"
import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { User } from "../../types/User";
import { useAuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContextLogged = useAuthContext();

    const handleLogin = () => {
        const existingAccounts: User[] = JSON.parse(localStorage.getItem('accounts') || '[]')

        const foundAccount = existingAccounts.find(
            (account: User) => account.email === email && account.password === password
        );

        if (foundAccount) {
            if (foundAccount.email === email && foundAccount.password === password) {
                setEmail('');
                setPassword('');
                localStorage.setItem('logged', 'true')
                authContextLogged.setLoggedIn(true);

            } else {
                alert('Nome de usuário ou senha incorretos!');
                authContextLogged.setLoggedIn(false);
            }
        } else {
            alert('Nenhuma conta encontrada!');
        }
    }


    return (
        <S.Container>
            <h2>Login </h2>
            <S.Form >
                <S.StyledInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />

                <S.StyledInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                <NavLink to='/private'>
                    <S.StyledButton onClick={handleLogin}>Login</S.StyledButton>
                </NavLink>
                <NavLink to='/home'>
                    <S.StyledBackButton>Voltar</S.StyledBackButton>
                </NavLink>
            </S.Form>
        </S.Container>
    )
}
