

export function imageToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        // Evento que se ejecuta cuando se ha leído el archivo con éxito
        reader.onload = () => resolve(reader.result.split(',')[1]); // Separa el Base64 del prefijo
        reader.onerror = (error) => reject(error);
        
        // Lee el archivo como una URL en Base64
        reader.readAsDataURL(file);
    });
}

/**
 * Convierte una cadena base64 en un archivo tipo imagen.
 * 
 * @param {string} base64String - La cadena base64 que representa la imagen.
 * @param {string} fileName - El nombre del archivo a crear (por defecto, "image.png").
 * @returns {File} - Un objeto File que representa la imagen.
 */
export function base64ToImage(base64String, fileName = 'image.png') {
    // Extraer la parte de datos (si tiene prefijo "data:image...")
    const matches = base64String.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
        throw new Error('El formato de la cadena base64 no es válido.');
    }

    const mimeType = matches[1]; // Tipo MIME (ej: image/png)
    const base64Data = matches[2]; // La parte en base64

    // Decodificar base64 a binario
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);

    // Crear el archivo (Blob convertido en File)
    return new File([byteArray], fileName, { type: mimeType });
}
// Le pasas la imagen en base64 y te guarda la imagen en la pagina y te retorna la url donde esta ubicada
export const saveURLImagen = (base64) =>{
    const byteCharacters = atob(base64);
    const byteNumbers = Array.from(byteCharacters).map(char => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    return URL.createObjectURL(blob);
} 