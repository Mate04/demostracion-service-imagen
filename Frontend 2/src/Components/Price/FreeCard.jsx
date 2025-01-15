
import React, { useContext } from 'react'
import * as S from './StylePrice'
import { AuthContext } from '../../context/AuthContext';
import {getTestFree} from '../../service/getTypeSuscription'
import {getInfo} from '../../service/getInfoUser'
import {Toaster} from 'react-hot-toast'
import {notifyError,notify} from '../Toast/Toast'
import {useNavigate} from 'react-router'
export const FreeCard =({duration,credit, togle}) => {
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const obtenerPruebaGratuita = async () => {
    try {
      const user = await getInfo(token);
      const res = await getTestFree(token)
      notify('Su prueba se registro con exito')
      navigate('/')
    } catch (error) {
      notifyError('Ya uso la prueba gratuita')
    }
    
    
  }

  return (
    <S.Card>
        <S.Badge>Mejor oferta - 60%</S.Badge>
        <S.PlanType>
            <span>⚡</span>Prueba gratuita
        </S.PlanType>
        <S.PlanTitle>{duration} dias gratis</S.PlanTitle>
        <S.Credits>({credit} credits)</S.Credits>
        <S.Price>
            0,00 US$
        </S.Price>
        <S.Description>
        ¡Pruebe todas las funcionalidades con la prueba gratuita y descubra como de sencillo se puede sacar un fondo con un par de clicks! Regístrese ahora y comience a disfrutar de los beneficios sin ningún compromiso.
        </S.Description>
        {
          token ? 
          <S.Button onClick={obtenerPruebaGratuita}>Iniciar prueba gratuita</S.Button> 
        : <S.Button onClick={togle}>Sign Up</S.Button>

        }
        <Toaster/>
    </S.Card>
  )
}
