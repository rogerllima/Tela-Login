import { createContext, useContext } from "react";
import { Produto } from "../../types/Produto";

type ProductsContextType = {
    product: Produto | null;
}

export const ProductContext = createContext<ProductsContextType>(null!);

export const useProductContext = () => {
    return useContext(ProductContext)
}