import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #000;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
`

export const CardsContainer = styled.div`
    z-index: 1;
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch; // Asegura que las tarjetas se estiren para tener la misma altura

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 350px;
  height: 500px; // Altura fija para ambas tarjetas
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Badge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`

export const PlanType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

export const PlanTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

export const Credits = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

export const Price = styled.div`
  font-size: 2.5rem;
  color: #8257ff;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    color: #666;
  }
`

export const Description = styled.p`
  color: #666;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`

export const Button = styled.button`
  width: 100%;
  padding: 0.875rem;
  border-radius: 10px;
  border: none;
  background: #8257ff;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: auto; /* Empuja el botón hacia abajo */

  &:hover {
    background: #6f48d8;
  }
`;

export const CreditOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.875rem;
  }
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #8257ff;
  &:checked {
    background: #8257ff;
  }
`