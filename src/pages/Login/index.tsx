import { useState } from "react"
import * as S from './styles'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);


    const handleLogin = () => {
        const accountData = localStorage.getItem('account');

        if (accountData) {
            const account = JSON.parse(accountData);

            if (account.email === email && account.password === password) {
                setEmail('');
                setPassword('');
                setLoggedIn(true);
            } else {
                alert('Nome de usuário ou senha incorretos!');
                setLoggedIn(false);
            }
        } else {
            alert('Nenhuma conta encontrada!');
        }
    }


    return (
        <S.Container>
            <h2>Login </h2>
            <S.Form >
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                <S.StyledButton onClick={handleLogin}>Login</S.StyledButton>
            </S.Form>
            {loggedIn && <Link to='/private'/>}
        </S.Container>
    )
}
