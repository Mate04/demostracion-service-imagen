import { apiBackend } from './apiBackend'

export const getInfo = async(token) => {
    try {
        const response = await apiBackend.get('/api/user',{
            headers:{ Authorization: `Bearer ${token}` }
        })
        return response.data.User
        
    } catch (error) {
        error = error.response.data.error
        throw error;
    }

}