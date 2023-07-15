import { useState, useEffect } from "react";
import * as S from './styles'
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { Produto } from "../../../types/Produto";


const Private = () => {
  const [products, setProducts] = useState<Produto[]>();
  const auth = useAuthContext();

  const handleLogOut = () => {
    auth.setLoggedIn(false);
    localStorage.removeItem('logged');
  }

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch('http://localhost:8080/products');
      const data = await repos.json();
      setProducts(data);
    }
    fetchRepos();
  }, []);




  return (
    <div>
      <S.StyledHeader>
        Gerenciador de Produtos
      </S.StyledHeader>
      <S.ContainerItems>
        <S.ContainerGerenciador>
          <S.StyledButton onClick={handleLogOut}>
            Registrar Produtos
          </S.StyledButton>
          <S.StyledButton onClick={handleLogOut}>
            Deletar Produtos
          </S.StyledButton>
          <S.StyledButton onClick={handleLogOut}>
            Atualizar Produtos
          </S.StyledButton>
        </S.ContainerGerenciador>
        <S.ContainerLogout>
          <NavLink to="/home">
            <S.StyledButton onClick={handleLogOut}>
              Logout
            </S.StyledButton>
          </NavLink>
        </S.ContainerLogout>
      </S.ContainerItems>
      <div>
      {products?.map((product)=>{
        return product.name
      })}
      </div>
    </div>
  
  )
}

export default Private;