import React, { useState } from 'react'
import * as S from './styles'
import { User } from '../../../types/User';
import { NavLink } from 'react-router-dom';

export const SingUp = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAccount = { nome, email, password };
    const existingAccounts: User[] = JSON.parse(localStorage.getItem('accounts') || '[]')
    const updatedAccounts = [...existingAccounts, newAccount];


    localStorage.setItem('accounts', JSON.stringify(updatedAccounts));

    setNome('');
    setEmail('');
    setPassword('');
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleCreate}>
      <h2>Cadastrar Usuário </h2>
        <S.StyledInput type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <S.StyledInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
        <S.StyledInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
        <S.StyledButton type='submit' disabled={!email || !password}>Cadastrar Usuário</S.StyledButton>
        <NavLink to='/home'>
          <S.StyledBackButton>Voltar</S.StyledBackButton>
        </NavLink>
      </S.Form>
    </S.Container>
  )
}

export default SingUp;