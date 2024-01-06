import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    if(error.message === 'Network Error' ) {
        //interceptando o erro para mostrar ao usuário uma mensagem em seu idiota habitual
        return Promise.reject(new Error('Erro de conexão'))
    }

    if(error.response?.status === 401) {
        // Do something
    }

    return Promise.reject(error);
}