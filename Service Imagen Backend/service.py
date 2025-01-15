import base64
from PIL import Image
from io import BytesIO
from fastapi import HTTPException
from rembg import remove

def createImagen(imagen_64:str):
        try:
                buffer = BytesIO()

                image_data = base64.b64decode(imagen_64)

                # Remover el fondo
                output_data = remove(image_data)

                # Convertir los datos procesados (bytes) nuevamente en una imagen
                output_image = Image.open(BytesIO(output_data))

                output_image.save(buffer, format="PNG")  # Especifica el formato de la imagen si es necesario
                buffer.seek(0)  # Mover el puntero al inicio
                processed_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

                #Ver resultado en txt
                #with open("resultado.txt", "w") as txt_file:
                #    txt_file.write(processed_base64)

                return processed_base64
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error al procesar la imagen")
        

