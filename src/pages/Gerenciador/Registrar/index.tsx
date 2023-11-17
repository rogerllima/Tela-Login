import { useState } from "react"
import * as S from './styles'
import axios from 'axios'
import { postProducts } from "../../../services/ProductsService";

const RegistrarProduto = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const registrarProduto = (data: { name: string, price: string }) => {
        postProducts(data);
    }

    return (
        <S.Container>
            <S.Form >
                <h2>Registrar Produto</h2>
                <S.StyledInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do Produto" />
                <S.StyledInput type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço do Produto" />
                <S.StyledButton onClick={() => { registrarProduto({ name, price }) }}>Registrar</S.StyledButton>
            </S.Form>
        </S.Container>
    )
}

export default RegistrarProduto;