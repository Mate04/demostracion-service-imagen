import SliderImagen from '../Components/EditImagen/SliderImagen'
import {useNavigate} from 'react-router'
import { useContext, useEffect, useState } from 'react';
import {saveURLImagen} from '../script/base64'
import {ImageWrapper} from '../Components/EditImagen/EditStyle'
import { Download, FlipHorizontal  } from 'lucide-react';
import {ButtonWrapper,StyledButton , IconWrapper} from '../Components/EditImagen/EditStyle'
import { AuthContext } from '../context/AuthContext';
import Register from '../Components/NavBar/FormLogin/FormRegister'
import {getInfo} from '../service/getInfoUser'

export default function EditImage() {

  const navigate = useNavigate()
  const imagenConFondo = localStorage.getItem('imagen_con_fondo')
  const imagenSinFondo = localStorage.getItem('imagen_sin_fondo')
  
  useEffect(()=>{
    //Verificamos que no este cargado los datos
    if (!imagenConFondo || !imagenSinFondo) navigate('/')
  },[])

  const imagenConFondoURL = saveURLImagen(imagenConFondo)
  const imagenSinFondoURL = saveURLImagen(imagenSinFondo)

  const { token } = useContext(AuthContext);

  const [ modalRegister, setModalRegister ] = useState(false)
  
  const toggleModal = () => setModalRegister(!modalRegister)

  const dowloadImagen = async() => {
    if(!token) {
      setModalRegister(true)
      return
    }
    try {
      const user = await getInfo(token)
      if (user.credit < 1) {        
        navigate('/price')
        return
      }
    } catch (error) {
      throw new error
    }
    descargarImagen(imagenSinFondoURL, 'imagen_sin_fondo.png')
  }


  const descargarImagen = (url, nombreArchivo) => {
    const enlace = document.createElement('a')
    enlace.href = url
    enlace.download = nombreArchivo
    enlace.click()
  }

  return (
    <>
    <ImageWrapper>
      <SliderImagen imagenConFondo={imagenConFondoURL} imagenSinFondo={imagenSinFondoURL} dowloadImagen={dowloadImagen} />
      
    </ImageWrapper>
    {modalRegister && (
      <Register toggleModal={toggleModal}/>
    )}
    </>
  )
}
