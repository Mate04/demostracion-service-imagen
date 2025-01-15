import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`

export const ViewerContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, #ffffff 0%,rgb(232, 223, 243) 50%, #d1fae5 100%);

  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);

  padding: 3rem;
  position: relative;
  max-width: 800px;
  min-width: 400px;
  width: fit-content;
`

export const ImageContainer = styled.div`
  background-color: #bfe5ff;
  border-radius: 16px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
`

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  &:left {
    left: -20px;
  }

  &:right {
    right: -20px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`


export const SliderButton = styled.button`
  background-color:rgb(104, 231, 248);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`

export const DownloadButton = styled.button`
  background-color: #90EE90;
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`
