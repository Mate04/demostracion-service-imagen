import {apiBackend} from './apiBackend'
import {apiServiceImagen} from './apiServerImagen'

export const createImagen = async (data, token)=>{
    try {
        const response = await apiBackend.post('/api/images',data,{
            headers:{ Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        
        error = error.response.data.detail
        throw error;
    }
    
}

export const createImagenFree = async (data) =>{
    try {
        const response = await apiServiceImagen.post(
            '/api/image/',
            data
            ,{
                withCredentials:false
            }
        )
        return response.data
    } catch (error) {
        error = error.response.data.error
        throw error;
    }
}