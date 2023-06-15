import React, {useState } from 'react'
import * as S from './styles'

export const SingUp = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const account = {nome, email, password }
    localStorage.setItem('account', JSON.stringify(account));
    setNome('');
    setEmail('');
    setPassword('');
  } 

  return (
    <S.Container>
      <h2>Cadastrar Usuário </h2>
      <S.Form onSubmit={handleCreate}>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
      <S.StyledButton type='submit' disabled={!email || !password}>Cadastrar Usuário</S.StyledButton>
      </S.Form>
      </S.Container>
  )
}

export default SingUp;