import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 1.5rem;
`

export const Tittle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 1px #2563eb;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`

export const ErrorMessage = styled.span`
  color: red; /* Puedes personalizar el color */
  font-size: 12px; /* Letra pequeña */
  margin-top: 4px;
  display: block;
`;

export const CartelError = styled.div`
        background-color: 'rgba(255, 0, 0, 0.1)';
        color: 'red';
        padding: '10px';
        border-radius: '5px';
        margin-bottom: '15px';
        text-align: 'center'
`