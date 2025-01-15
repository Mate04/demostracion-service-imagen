import { apiBackend } from './apiBackend'

export const getTipeSuscription = async () => {
    try{
        const response = await apiBackend.get('/api/type-suscription');
        return response.data
    }catch(error){
        error = error.response.data.error
        throw error;
    }
    
}

export const createPay = async (data,token) => {
    try{
        const response = await apiBackend.post(
            '/api/payment/molly',
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Token en la cabecera
                }
            }
        );
        return response.data
    }catch(error){
        error = error.response.data.error
        throw error;
    }
}


export const getTestFree = async (token) => {
    try {
        const response = await apiBackend.post(
            '/api/payment/test-free',
            {}, // Cuerpo vacío si no necesitas enviar datos
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Token en la cabecera
                }
            }
        )
        return response.data
    } catch (error) {
        error = error.response.data.error
        throw error;
    }
    
}