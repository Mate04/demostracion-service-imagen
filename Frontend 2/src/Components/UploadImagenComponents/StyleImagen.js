
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
`

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2.5rem;
`

export const UploadCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
  border: 2px dashed ${props => props.isDragActive ? '#000' : '#ddd'};
  transition: all 0.3s ease;
  cursor: pointer;
  //Centrar Items
  justify-items: center;

  &:hover {
    border-color: #000;
  }
`


export const UploadButton = styled.button`
  background: #000;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`

export const DropText = styled.p`
  color: #666;
  margin: 1rem 0;
`

export const URLText = styled.p`
  color: #666;
  font-size: 0.875rem;

  span {
    cursor: pointer;
  }
`

export const SampleSection = styled.div`
  margin-top: 2rem;
`

export const SampleTitle = styled.p`
  color: #666;
  margin-bottom: 1rem;
`

export const SampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`

export const Footer = styled.footer`
  font-size: 0.75rem;
  color: #666;
  margin-top: 2rem;
  text-align: center;

  a {
    color: inherit;
    text-decoration: underline;
  }
`
