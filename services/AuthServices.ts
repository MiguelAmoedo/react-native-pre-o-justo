import axios from "axios";

//Resolvi seguir pela API desenvolvida por mim em node.js, seguindo a estrutura de dados pedida no desafio.

const apiUrl = 'https://api-node-puce.vercel.app'; 

var AuthService  = {
  login: async (formData) => {
    const AuthApi = axios.post(`${apiUrl}/auth/login`, formData);
    return await AuthApi;
  },
  register: async (formData) => {
    const AuthApi = axios.post(`${apiUrl}/auth/register`, formData);
    return await AuthApi;
  },
  UserById: async (id) => {
    const AuthApi = axios.get(`${apiUrl}/auth/` + id);
    return await AuthApi;
  },
  putUser: async (id, formData) => {
    const AuthApi = axios.put(`${apiUrl}/auth/` + id, formData);
    return await AuthApi;
  },
};

export default AuthService;
