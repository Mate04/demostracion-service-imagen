import { apiBackend } from './apiBackend'

export const login = async(data) => {
    try {
        const response = await apiBackend.post('/api/auth/login',data)
        return response.data.token;
    } catch (error) {
        error = error.response.data.error
        throw error;
    }
}

export const register = async(data) => {
    try {
        const response = await apiBackend.post('/api/auth/register',data)
        return response.data.token;
    } catch (error) {
        error = error.response.data.error
        throw error;
    }
}