import {apiBackend} from './apiBackend'

export const getPaymentStatus =async (id_moly,token) =>{
    try {
        const response = await apiBackend.get("/api/payment/molly/"+id_moly,{
            headers: { Authorization: `Bearer ${token}` }
        })
        
        return response.data
    } catch (error) {
        error = error.response.data.error
        throw error;
    }
    
}