import styled from 'styled-components'

const GradientLine = styled.div`
  height: .9em;
  width: 100%;
  background: linear-gradient(
    to right,
    #9333EA,  /* Púrpura */
    #E11D48,  /* Rosa/Rojo */
    #FACC15   /* Amarillo */
  );
`

export default function GradientDivider() {
  return <GradientLine />
}