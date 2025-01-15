import styled from "styled-components";



export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 90; /* Asegura que esté por encima de otros elementos */
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  position: relative;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  &:hover {
    color: #374151;
  }
`;
