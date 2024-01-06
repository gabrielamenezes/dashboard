import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";
import { errorInterceptor } from "./interceptors";
// url base sempre se repete para todas as requisições que vamos fazer
// header, https, autenticação

//instância base do axios
//axios é um meio de campo entre a execução da chamada e essa chamada chegar no servidor
const Api = axios.create({
    baseURL: 'http://localhost:3333'
});

Api.interceptors.response.use((response) => responseInterceptor(response), (error) => errorInterceptor(error))

export {Api};