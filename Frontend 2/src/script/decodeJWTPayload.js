
export const decodeJWT = (token) => {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('El token no tiene el formato correcto');
    }
    const payloadBase64 = parts[1]; // La segunda parte es el payload
    const payloadJson = atob(payloadBase64); // Decodifica de Base64 a texto plano
    return JSON.parse(payloadJson); // Convierte el texto plano a objeto JSON
}