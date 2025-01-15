import styled from 'styled-components'


import { Icon, IconSvg, Title } from '../NavBar/StyleNavbar'
import {Link} from 'react-router'
const FooterContainer = styled.footer`
  background-color: #111111;
  padding: 2rem 4rem;
  color: #ffffff;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`

const LogoSection = styled.div`
  display: flex;
  align-items: flex-start;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ColumnTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const FooterLink = styled(Link)`
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`

const Copyright = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-top: 2rem;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <LogoSection>
          <Icon>
            <IconSvg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
              <path d="M7 4v16M17 4v16M3 8h4M17 8h4M3 12h18M3 16h4M17 16h4" />
            </IconSvg>
            <Title>Remove Background</Title>
        </Icon>
        </LogoSection>
      <Copyright>
        2025 © Remove Background S.L, Argentina
      </Copyright>
    </FooterContainer>
  )
}
