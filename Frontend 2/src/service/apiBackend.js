import axios from 'axios';

const url_backend = import.meta.env.VITE_URL_BACKEND

export const apiBackend = axios.create({
    baseURL: url_backend,
    headers: {
        'Content-Type': 'application/json', // Asegúrate de usar el tipo de contenido adecuado
    },
    withCredentials:true
})