import styled from 'styled-components'

export const DropdownMenu = styled.div`
position: relative;

    display: inline-block;
`

export const DropdownTrigger = styled.button`
background: transparent;
border: none;
cursor: pointer;
display: flex;
align-items: center;
gap: 8px;
font-size: 1rem;
padding: 8px 12px;
border-radius: 4px;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #f0f0f0;
}
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 12rem;
  overflow: hidden;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }

  &.text-destructive {
    color: #e53935;

    &:hover {
      background-color: #ffe5e5;
    }
  }
`;