import axios from "axios";

//Resolvi seguir pela API desenvolvida por mim em node.js, seguindo a estrutura de dados pedida no desafio.

const apiUrl = 'https://api-node-puce.vercel.app'; 

var ProductService  = {
  getAll: async () => {
    const ProductsApi = axios.get(`${apiUrl}/api/products`);
    return await ProductsApi;
  },
  getById: async (id) => {
    const ProductsApi = axios.get(`${apiUrl}/produtos/` + id);
    return await ProductsApi;
  },

};

export default ProductService;
