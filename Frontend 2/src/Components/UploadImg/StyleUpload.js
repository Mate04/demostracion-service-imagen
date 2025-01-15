import styled from 'styled-components'


export const GradientBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`

export const MainContent = styled.div`

  width: 100%;
  max-width: 800px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4B5563;
  margin-bottom: 2rem;
`

export const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, #ffffff 0%, #e9d5ff 50%, #d1fae5 100%);

  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem;
  width: 100%;
  max-width: 700px;
`

export const UploadCard = styled.label`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 0 auto 2rem;
  border: 2px dashed ${props => props.isDragging ? '#6366f1' : '#e5e7eb'};
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  height: 300px;
  max-width: 600px;

  ${props => props.isDragging && `
    background: rgba(255, 255, 255, 0.95);
    transform: scale(1.03);
  `}
  &:hover{
    background: rgba(255, 255, 255, 0.95);
    transform: scale(1.03);
    border: 2px dashed #6366f1;
  }
`;

export const UploadButton = styled.span`
  background: #111827;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);

  &:hover {
    background: #374151;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.3);
  }
`

export const DropText = styled.p`
  margin: 1rem 0;
  color: #6B7280;
`
export const DropTextError = styled.p`
  margin: 1rem 0;
  color:rgb(251, 34, 34);
  span {
    font-weight:bold;
  }
`

export const URLText = styled.p`
  color: #6B7280;
  margin: 0;

  & span {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const PreviewImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;

  img {
    border-radius: 0.5rem;
    object-fit: contain;
  }
`

export const ExamplesSection = styled.div`
  margin-top: 2rem;
`

export const ExamplesHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
`

export const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ExampleImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const Footer = styled.footer`
  font-size: 0.875rem;
  color: #6B7280;
  margin-top: 1rem;
  text-align: center;

  & a {
    color: #111827;
    text-decoration: underline;
  }
`
