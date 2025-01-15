
import styled from 'styled-components'
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 1rem;
`

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 3rem; // Aumentado de 2.5rem
  margin-bottom: 1rem;
  color: #1a1a1a;
`

const Subtitle = styled.p`
  font-size: 1.1rem; // Añadido
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const AccordionItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: ${props => props.$isOpen ? 'white' : 'transparent'};
  box-shadow: ${props => props.$isOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
`

const AccordionHeader = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.2rem; // Aumentado de 1rem
  color: #1a1a1a;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

const AccordionContent = styled.div`
  padding: ${props => props.$isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem'};
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  overflow: hidden;
  font-size: 1.1rem; // Añadido
  color: #666;
  line-height: 1.6;
`

const IconWrapper = styled.span`
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
`

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index} $isOpen={openIndex === index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {item.question}
            <IconWrapper $isOpen={openIndex === index}>
              <ChevronUp size={20} />
            </IconWrapper>
          </AccordionHeader>
          <AccordionContent $isOpen={openIndex === index}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  )
}

export default function FAQPage() {
  const faqItems = [
    {
      question: '¿Qué es Remove Background?',
      answer: 'Es una herramienta web para eliminar fondos de cualquier imagen automáticamente y en segundos. Remove Background utiliza tecnología de inteligencia artificial para ofrecer resultados más profesionales.'
    },
    {
      question: '¿Qué formato de imagen acepta Remove Background?',
      answer: 'Remove Background acepta formatos de imagen comunes, incluyendo archivos JPG, JPEG y WEBP.'
    },
    {
      question: '¿Qué resolución máxima de archivo acepta Remove Background?',
      answer: 'Remove Background puede procesar imágenes con una resolución de hasta 5000x5000 píxeles.'
    },
    {
      question: '¿Cuál es el tamaño máximo de archivo que acepta Remove Background?',
      answer: 'El tamaño máximo de archivo aceptado es de 6 MB por imagen.'
    },
    {
      question: '¿Puedo usar imágenes retocadas con Remove Background para fines comerciales?',
      answer: 'Sí, todas las imágenes procesadas con Remove Background pueden utilizarse tanto para fines personales como comerciales.'
    }
  ]

  return (
    <Container>
      <Content>
        <Header>
          <Title>FAQs</Title>
          <Subtitle>
            If you have any questions that you can't answer through our FAQs, don't hesitate to contact our team.
          </Subtitle>
        </Header>
        <Accordion items={faqItems} />
      </Content>
    </Container>
  )
}

