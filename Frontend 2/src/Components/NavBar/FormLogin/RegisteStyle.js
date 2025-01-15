import styled from 'styled-components'


export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  transition: border-color 0.2s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #000;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`
