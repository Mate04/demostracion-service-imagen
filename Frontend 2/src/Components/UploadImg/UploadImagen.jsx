import {UploadCard,DropText,ExampleImage,ExamplesGrid,ExamplesHeader,ExamplesSection,GlassContainer,
    GradientBackground,MainContent,PreviewImage,Subtitle,DropTextError,
    Title,URLText,UploadButton} from './StyleUpload'
import {useState,useCallback,useEffect} from 'react'
import {useNavigate} from 'react-router'
//example
import example from '../../../public/example.jpeg'
import example2 from '../../../public/example2.jpg'
import example3 from '../../../public/example3.jpg'
const examples = [example,example2,example3]
//toast
import { Toaster } from 'react-hot-toast';
import {notifyError,notify, notiPersonalizado} from '../Toast/Toast.js'
//service
import {createImagenFree,createImagen} from '../../service/serviceImagen.js'
import {getInfo} from '../../service/getInfoUser.js'
//contexto

const validExtensions = ['jpg', 'jpeg', 'webp','png'];
const validMimeTypes = ['image/jpeg', 'image/webp'];


export default function UploadImagen() {
    const navigate = useNavigate()
    
    
    
    

    const [isDragging, setIsDragging] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleDragOver = useCallback((e) => {
      e.preventDefault();
      setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);

      const files = e.dataTransfer.files;

      uploadListImagen(files)
  
    }, []);

    const handleFileInput = useCallback((e) => {
      const files = e.target.files;

      uploadListImagen(files)
      
    }, []);

    const uploadListImagen = async(files) => {
      let casoFeliz = true

      if (!files){
        notifyError('No se mando ningun archivo')
        return false
      }      
      
      try {
        if (casoFeliz){
          // Esperar a que todas las imágenes se suban
          const res = await Promise.all(Array.from(files).map(file => uploadImagen(file)))
          
          notify('Se guardaron correctamente todas las imágenes');
          // Una vez que todas las imágenes se han subido correctamente
          
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        notifyError('Ocurrió un error al subir algunas imágenes');
      }
    
        // notify('Se guardaron correctamente todas las imágenes');
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);  
    }

  const uploadImagen = async (file) =>{
    const name = file.name
    
    //filtro para ver el tipo de imagen
    const fileExtension = name.split('.').pop().toLowerCase();
    if (!validMimeTypes.includes(file.type) || !validExtensions.includes(fileExtension)) {
      notifyError(`la imagen ${name} debe ser de tipo JPG, JPEG, PNG o WEBP`);
      return;
    }
    // Validar el tamaño del archivo (máximo 6 MB)
    const maxSize = 6 * 1024 * 1024; // 6 MB en bytes
    if (file.size > maxSize) {
      notifyError(`la imagen ${name} no debe superar los 6 MB`);
      return;
    }
    
    //caso feliz que se guardo la imagen
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const imageBase64 = event.target?.result;
        const data = {
          "imagen64":imageBase64.split(',')[1]
        }
        
        try {
          
          const res = await createImagenFree(data);
          const imagenSinFondo = `data:image/png;base64,${res.resultado}`;
          
          const expirationTime = Date.now() + 15 * 60 * 1000;
          const newImage = {
            image: imageBase64,
            imageSinFondo:imagenSinFondo,
            expires: expirationTime,
          };
          
          const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
          const updatedImages =  [...storedImages, newImage];
          localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
          
          resolve();
        } catch (error) {
          notifyError('Ocurrió un error envie nuevamente porfavor');
          reject(error);
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  const handleExampleClick = async (exampleSrc) => {
    try {
      // Fetch the image and convert it to a blob
      const response = await fetch(exampleSrc);
      const blob = await response.blob();
      
      // Create a File object from the blob
      const file = new File([blob], "example-image.jpg", {
        type: "image/jpeg",
      });
      
      // Create a FileList-like object
      const fileList = [file]
      
      // Process the file using existing upload logic
      uploadListImagen(fileList);
    } catch (error) {
      notifyError('Error al procesar la imagen de ejemplo');
      console.error('Error processing example image:', error);
    }

  }



  return (
    <GradientBackground>
      <MainContent>
        <Title>Elimine fondos al instante</Title>
        <Subtitle>
        Elimina fácilmente el fondo de tus imágenes, en cuestión de segundos y de forma gratuita.
        </Subtitle>
      </MainContent>

      <GlassContainer>
        <UploadCard
          isDragging={isDragging}
          // Indica cuando se esta por tirar el archivor
          onDragOver={handleDragOver}
          // Cuando se deja de arrastar el archivo
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          htmlFor="fileInput"
        >
          <input
            type="file"
            id="fileInput"
            hidden
            accept="image/*"
            onChange={handleFileInput}
          />
          <UploadButton>Suba su imagen</UploadButton>
          <DropText>o solamente arrastre su <span>imagen aqui</span></DropText>
          


          {uploadedImage && (
            <PreviewImage>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={uploadedImage} 
                alt="Uploaded preview" 
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            </PreviewImage>
          )}
        </UploadCard>

        <ExamplesSection>
          <ExamplesHeader>
            <span style={{ color: '#6B7280' }}>No tienes imagenes?</span>
            <span style={{ color: '#111827', fontWeight:'bolder' }}>Prueba con estas</span>
          </ExamplesHeader>
          <ExamplesGrid>
            {
              examples.map((exampleSrc, index)=>(
                  <ExampleImage
                  key={index} 
                  src={examples[index]}
                  width={90}
                  height={80}
                  onClick={() => handleExampleClick(exampleSrc)
                  }
                />
              ))
            }
              
          </ExamplesGrid>
        </ExamplesSection>
      </GlassContainer>
      <Toaster />
    </GradientBackground>
  )
}
