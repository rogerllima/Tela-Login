import { useState, useEffect } from "react";
import * as S from './styles'
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { Produto } from "../../../types/Produto";
import RegistrarProduto from "../../Gerenciador/Registrar";
import { getProducts, postProducts } from "../../../services/ProductsService";


const Private = () => {
  const [tabelaVisivel, setTabelaVisivel] = useState(false);
  const [registrarProdutoVisivel, setRegistrarProdutoVisivel] = useState(false);

  const [products, setProducts] = useState<Produto[]>();
  const auth = useAuthContext();

  const handleLogOut = () => {
    auth.setLoggedIn(false);
    localStorage.removeItem('logged');
  }

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
      })
  }, []);

  const clickMostrarRegistrarProduto = () => {
    if (tabelaVisivel) {
      setTabelaVisivel(false);
    }
    setRegistrarProdutoVisivel(!registrarProdutoVisivel)
  }
  const mostrarTabela = () => {
    if (registrarProdutoVisivel) {
      setRegistrarProdutoVisivel(false);
    }
    setTabelaVisivel(!tabelaVisivel);
  };

  return (
    <div>
      <S.StyledHeader>
        Gerenciador de Produtos
      </S.StyledHeader>
      <S.ContainerItems>
        <S.ContainerGerenciador>
          <S.StyledButton onClick={clickMostrarRegistrarProduto}>
            Registrar Produtos
          </S.StyledButton>
          <S.StyledButton>
            Deletar Produtos
          </S.StyledButton>
          <S.StyledButton >
            Atualizar Produtos
          </S.StyledButton>
          <S.StyledButton onClick={mostrarTabela}>
            Lista de Produtos
          </S.StyledButton>
        </S.ContainerGerenciador>
        <NavLink to="/home">
          <S.StyledButton onClick={handleLogOut}>
            Logout
          </S.StyledButton>
        </NavLink>
      </S.ContainerItems>
      <S.ContainerTable>
        {tabelaVisivel && (<S.Table>
          <tbody>
            <tr>
              <S.Th>Name</S.Th>
              <S.Th>Price</S.Th>
            </tr>
            {products?.map((val, key) => {
              return (
                <tr key={key}>
                  <S.Td>{val.name}</S.Td>
                  <S.Td>{val.price}</S.Td>
                </tr>
              )
            })}
          </tbody>
        </S.Table>)}
        {registrarProdutoVisivel && <RegistrarProduto></RegistrarProduto>}
      </S.ContainerTable>
    </div>
  )
}

export default Private;