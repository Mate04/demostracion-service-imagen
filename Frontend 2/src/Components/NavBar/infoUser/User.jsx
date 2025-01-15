import {decodeJWT} from '../../../script/decodeJWTPayload'
import {deleteCokie} from '../../../script/getCokie'
import {AuthContext} from '../../../context/AuthContext'
import {useContext} from 'react'
import {useState} from 'react'
import {DropdownContent,DropdownMenu,DropdownTrigger,DropdownItem } from './StyleInfoUser'
import { ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router'; // Importa el hook de navegación

export default function User() {
  const { token } = useContext(AuthContext);
  const {sub} = decodeJWT(token)
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    deleteCokie("auth-token")
    setIsOpen(false);
    navigate('/')
    window.location.reload();
  };
  
  return (
    <DropdownMenu>
      <DropdownTrigger onClick={toggleDropdown}>
        Bienvenido {sub}
        <ChevronDown />
      </DropdownTrigger>
      {isOpen && (
        <DropdownContent>
          <DropdownItem
            className="text-destructive"
            onClick={() => {
              closeDropdown();
              console.log('Cerrar sesión');
            }}
          >
            <LogOut className="h-4 w-4" />
            <span>Cerrar sesión</span>
          </DropdownItem>
        </DropdownContent>
      )}
    </DropdownMenu>
  )
}
