import { NavLink } from "react-router-dom"
import * as S from './styles'

const Home = () => {
  return (
    <S.Container>
      <S.StyledHeader>
        Home
      </S.StyledHeader>
      <div>
        <NavLink to='/signup'>
          <S.Button>Criar Conta</S.Button>
        </NavLink>
        <NavLink to='/login'>
          <S.Button>Login</S.Button>
        </NavLink>
      </div>

    </S.Container>
  )
}

export default Home
