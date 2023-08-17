import * as S from './styles'
import img from '../../../images/logo-pix-png-icone-520x520.png'

const Home = () => {
  return (
    <S.Container>
      <S.ul>
      <S.img src={img}></S.img>
        <S.Li>
          <S.NavLink to='/singup'>
            <h1>Criar Conta</h1>
          </S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink to='/private'>
            <h1>Login</h1>
          </S.NavLink>
        </S.Li>
        <S.Li>
        <S.NavLink to='/signup'>
            <h1>Planos</h1>
          </S.NavLink>
        </S.Li>
        <S.Li>
        <S.NavLink to='/signup'>
            <h1>Controles de Investimentos</h1>
          </S.NavLink>
        </S.Li>
      </S.ul>
    </S.Container>
  )
}

export default Home
