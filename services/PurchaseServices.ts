import axios from "axios";

const apiUrl = 'https://api-node-puce.vercel.app'; 

const PurchaseService = {

  create: async (formData: any) => {
    const response = await axios.post(`${apiUrl}/purchases`, formData);
    return response;
  },
  

  getAll: async () => {
    const response = await axios.get(`${apiUrl}/purchases`);
    return response;
  },
  

  getById: async (id: string) => {
    const response = await axios.get(`${apiUrl}/purchases/${id}`);
    return response;
  },
  

  update: async (id: string, formData: any) => {
    const response = await axios.put(`${apiUrl}/purchases/${id}`, formData);
    return response;
  },
  

  delete: async (id: string) => {
    const response = await axios.delete(`${apiUrl}/purchases/${id}`);
    return response;
  }
};

export default PurchaseService;
