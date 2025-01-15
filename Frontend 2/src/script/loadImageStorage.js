

export const loadImages = () => {
    const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    // Filtrar imágenes que no hayan expirado
    const validImages = storedImages.filter(image => Date.now() <= image.expires);
    // Actualizar el localStorage con las imágenes válidas
    localStorage.setItem('uploadedImages', JSON.stringify(validImages));
    return validImages;
  };