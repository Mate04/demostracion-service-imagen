import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import {useState,useEffect} from 'react'
export default function SliderImagen({ imagen, imagenSinFondo,mostrarSinFondo }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  
  useEffect(() => {
    let start = mostrarSinFondo ? 0 : 100;
    let end = mostrarSinFondo ? 100 : 0;
    let increment = mostrarSinFondo ? 5 : -5;

    const animateSlider = () => {
      setSliderPosition((pos) => {
        const newPos = pos + increment;
        if ((increment > 0 && newPos >= end) || (increment < 0 && newPos <= end)) {
          return end;  // Detiene en el límite
        }
        requestAnimationFrame(animateSlider);
        return newPos;
      });
    };

    requestAnimationFrame(animateSlider);
  }, [mostrarSinFondo]);


  return (
    <>
      <ReactCompareSlider
      position={sliderPosition}
      onlyHandleDraggable
      handle={<div />}
      style={{
        backgroundColor: '#bfe5ff',
        borderRadius: '16px',
        maxWidth:'600px',
        minWidth:'400px',
        maxHeight:'800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
        itemOne={
          <ReactCompareSliderImage
            src={imagen}
            style={{
                width: '100%',
                height:'100%',
                objectFit: 'contain',
              }}  
          />
        }
        itemTwo={
          <div style={{
            backgroundImage: `
              linear-gradient(45deg, #ccc 25%, transparent 25%),
              linear-gradient(-45deg, #ccc 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #ccc 75%),
              linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0',
            backgroundColor: 'white' // Fondo blanco detrás del patrón
          }}>
            <img
              src={imagenSinFondo}
              alt="Imagen sin fondo"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}    
            />
          </div>
        }
      />
    </>
  );
}
