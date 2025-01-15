import styled from 'styled-components'
export const ImageContainer = styled.div`
  position: relative;
  display: inline-block; /* Ajustar al tamaño del contenido */
  
  border-radius: 8px;
  overflow: hidden;
`

export const StyledImg = styled.img`
  max-width: 400px;
  height: auto;
  object-fit: cover;
`

export const ImageWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #9333ea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7e22ce;
  }
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`

