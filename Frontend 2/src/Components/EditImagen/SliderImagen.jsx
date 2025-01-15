import { useState, useEffect, useRef } from 'react';
import { ImageContainer, ButtonWrapper,StyledButton , IconWrapper } from './EditStyle';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Download, FlipHorizontal  } from 'lucide-react';
export default function SliderImagen({ imagenConFondo, imagenSinFondo, dowloadImagen }) {
  const [position, setPosition] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const animationFrame = useRef(null);

  

  const handlePointerDown = () => {
    setIsDragging(true);
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    smoothReset();  // Inicia la transición suave
  };

  const smoothReset = () => {
    const start = performance.now();
    const startPos = position;
    const duration = 500;  // Duración de la transición en ms

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);  // Progreso de 0 a 1
      const newPos = startPos + (100 - startPos) * progress;
      setPosition(newPos);

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
    <ImageContainer>
      <ReactCompareSlider
        position={position}
        onPositionChange={(pos) => {
          if (isDragging) {
            setPosition(pos);
          }
        }}
        handle={
          <div
            style={{
              width: 0,
              height: 0,
              opacity: 0,
              display: 'none',
              visibility: 'hidden',
              pointerEvents: 'none',
            }}
          />
        }
        onlyHandleDraggable={false}
        itemOne={
          <ReactCompareSliderImage
            src={imagenConFondo}
            alt="Image one"
            style={{
              minWidth: '400px',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'cover',
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={imagenSinFondo}
            alt="Image two"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ccc 25%, transparent 25%),
                linear-gradient(-45deg, #ccc 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #ccc 75%),
                linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
              backgroundSize: '16px 16px',
              backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0',
              background: 'white',
              maxWidth: '400px',
              height: 'auto',
              objectFit: 'cover',
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          />
        }
      />
      <style>
        {`
          .react-compare-slider__handle {
            display: none;
          }
        `}
      </style>
    </ImageContainer>
    <ButtonWrapper>
        <StyledButton onClick={() => dowloadImagen()}>
          <IconWrapper>
            <Download size={20} />
          </IconWrapper>
          <span>Descargar Imagen</span>
        </StyledButton>
        {/*
        El operador ^ (XOR) alterna entre 100 y 0.
        Si position es 100, 100 ^ 100 = 0.
        Si position es 0, 0 ^ 100 = 100.
        */}
        <StyledButton onClick={()=>setPosition(position ^ 100)}>
          <FlipHorizontal size={20}/>
        </StyledButton>
      </ButtonWrapper>
    </>
  );
}
