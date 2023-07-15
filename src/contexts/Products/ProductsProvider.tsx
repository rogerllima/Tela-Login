import { useState, useEffect } from "react";
import { ProductContext } from "./ProductsContext";
import { Produto } from "../../types/Produto";

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [product, setProduct] = useState<Produto | null>(null);

    return (
        <ProductContext.Provider value={{ product }}>
            {children}
        </ProductContext.Provider>
    )
}