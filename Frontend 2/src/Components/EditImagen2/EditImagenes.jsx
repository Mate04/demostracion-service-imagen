import {
  Container,
  DownloadButton,
  ImageContainer,
  NavigationButton,
  StyledImage,
  ContainerButton,
  SliderButton,
  ViewerContainer
} from './styleImagen.js';

import React, { useState, useEffect, useRef, useContext } from 'react';
import { ChevronLeft, ChevronRight, Download,FlipHorizontal, Plus } from 'lucide-react';
import { loadImages } from '../../script/loadImageStorage.js';
import Slider from './SliderImagen.jsx'
import { AuthContext } from '../../context/AuthContext.jsx';
import {getInfo} from '../../service/getInfoUser.js'
import Register from '../../Components/NavBar/FormLogin/FormRegister'
import {useNavigate} from 'react-router'
import {notiPersonalizado} from '../Toast/Toast.js'
import {Toaster} from 'react-hot-toast'
import {PrimaryButton} from '../NavBar/StyleNavbar.js'
export default function ImageViewer() {
  const [ modalRegister, setModalRegister ] = useState(false)
  const toggle = () => setModalRegister(!modalRegister)
  const navigate = useNavigate();

  // Antes: const images = [...]
  // Ahora cargamos las imágenes desde nuestro array de objetos
  const [imagenes, setImagenes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({ width: 300, height: 300 });
  const imgRef = useRef(null);

  const [mostrarSinFondo, setMostrarSinFondo] = useState(false);

  // Cargamos las imágenes una sola vez al montar el componente
  useEffect(() => {
    const loaded = loadImages(); 
    // Asegúrate de que loadImages() retorne el array deseado
    setImagenes(loaded || []);
  }, []);

  useEffect(() => {
    const updateImageDimensions = () => {
      if (imgRef.current) {
        const { naturalWidth, naturalHeight } = imgRef.current;
        const maxWidth = 700;  // Máximo ancho
        const maxHeight = 600; // Máximo alto

        let newWidth = naturalWidth;
        let newHeight = naturalHeight;

        if (newWidth > maxWidth) {
          newHeight = (maxWidth / newWidth) * newHeight;
          newWidth = maxWidth;
        }

        if (newHeight > maxHeight) {
          newWidth = (maxHeight / newHeight) * newWidth;
          newHeight = maxHeight;
        }

        setImageDimensions({ 
          width: Math.round(newWidth), 
          height: Math.round(newHeight) 
        });
      }
    };

    // Solo hacemos el cálculo si tenemos al menos una imagen
    if (imagenes.length > 0) {
      const img = new Image();
      img.onload = updateImageDimensions;
      img.src = imagenes[currentIndex]?.image; // Usamos la propiedad image
    }

    window.addEventListener('resize', updateImageDimensions);

    return () => {
      window.removeEventListener('resize', updateImageDimensions);
    };
  }, [currentIndex, imagenes]);

  const handlePrevious = () => {
    if (imagenes.length > 0) {
      setCurrentIndex((prev) => 
        prev === 0 ? imagenes.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (imagenes.length > 0) {
      setCurrentIndex((prev) => 
        prev === imagenes.length - 1 ? 0 : prev + 1
      );
    }
  };

  


  const cambiarImagen = () => {
    setMostrarSinFondo((prev) => !prev);
  }

  const handleDownload = async() => {
    // Implementar la funcionalidad de descarga aquí
    const imageUrl = imagenes[currentIndex]?.imageSinFondo;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'imagen-descargada.png';  // Nombre por defecto
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
    <Container>
      <ViewerContainer>
            <PrimaryButton style={{
              margin:'10px 3px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              gap:'10px'
            }}
            onClick={()=>{
              localStorage.clear()
              window.location.reload(); 
            }}
            >
              <Plus size={16}/>
              Nueva Imagen
            </PrimaryButton>
            <Slider
            imageDimensions={imageDimensions}
            imagen={imagenes[currentIndex]?.image}
            imagenSinFondo={imagenes[currentIndex]?.imageSinFondo}
            mostrarSinFondo={mostrarSinFondo}
            />
            {

            
            // <StyledImage
            //   ref={imgRef}
            //   src={imagenes[currentIndex]?.image} // Mostramos la propiedad image
            //   alt="Viewer image"
            // />
            }
          
        {imagenes.length > 1 && (
          <>
          <NavigationButton
          onClick={handlePrevious}
          style={{ left: '-20px' }}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </NavigationButton>
        
        <NavigationButton
          onClick={handleNext}
          style={{ right: '-20px' }}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </NavigationButton>
          </>
        )}
        
        <ContainerButton>
          <SliderButton onClick={cambiarImagen}>
            <FlipHorizontal size={16}/>
          </SliderButton>
          <DownloadButton onClick={handleDownload}>
            <Download size={16} />
            Descargar
          </DownloadButton>
        </ContainerButton>
        
      </ViewerContainer>
    </Container>
    {modalRegister && (
      <Register toggleModal={toggle}/>
    )}
    <Toaster/>
    </>
  );
}
