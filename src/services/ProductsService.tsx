import axios from "axios";

export async function getProducts() {
    const response = await axios.get('http://localhost:8080/products');
    return response.data;
}

export async function postProducts(data: { name: string, price: string }) {
    await axios.post('http://localhost:8080/products', data);
}


