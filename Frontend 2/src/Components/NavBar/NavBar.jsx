import {NavBar, SecctionLeft, Icon,IconSvg,Title, SecctionCenter, LinkTo, SecctionRight,GhostButton, PrimaryButton} from './StyleNavbar'
import FormLogin from './FormLogin/FormLogin'
import RegisterLogin from './FormLogin/FormRegister'
import {useState} from 'react'

import User from './infoUser/User'

export default function NavBarComponent() {
  const [modalLogin, setModaling] = useState(false)
  const [modalRegister,setModalRegister] = useState(false)


  const toggleModalRegister = () => setModalRegister(!modalRegister)
  const toggleModalLogin = () => setModaling(!modalLogin)

  return (
    <NavBar>
      <SecctionLeft>
        <Icon>
            <IconSvg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
              <path d="M7 4v16M17 4v16M3 8h4M17 8h4M3 12h18M3 16h4M17 16h4" />
            </IconSvg>
        </Icon>
        <Title>Remove Background</Title>
      </SecctionLeft>
      <SecctionCenter>
      <LinkTo to={"/"}>How to use</LinkTo>
        <LinkTo to={"/FAQ"}>Preguntas frecuentes</LinkTo>
      </SecctionCenter>

    </NavBar>
  )
}
