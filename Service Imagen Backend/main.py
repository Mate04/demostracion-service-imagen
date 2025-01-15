# Ejecutar la terminar -> .\venv\Scripts\activate

from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

from fastapi.middleware.cors import CORSMiddleware

from service import createImagen

class ImageRequest(BaseModel):
    imagen64: str

app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    #TODO: Aca poner en produccion el link
    allow_origins=["*"],  # Permitir todos los orígenes. Cambiar por dominios específicos si es necesario.
    allow_credentials=True,  # Permitir envío de cookies/credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/api/image/")
def create_image(request: ImageRequest):
    resultado = createImagen(request.imagen64)
    return {"resultado": resultado}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)