import {Header, Tittle, Subtitle, Button, Form, Input, ErrorMessage, CartelError} from '../Style.LogIn'
import Modal from '../../Modal/Modal'
import { useForm } from "react-hook-form";
import {login} from '../../../service/auth'
import {useState} from 'react'
import {AuthContext} from '../../../context/AuthContext'
import {useContext} from 'react'

export default function FormLogin({toggleModal}) {

  const { setToken } = useContext(AuthContext);

  const [serverError, setServerError] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //aca se manda el formulario
  const onSubmit = async (data) =>{
    setServerError(null);
    try {
      const token = await login(data)
      setToken(token)
      toggleModal()
    }
    catch(error){
      setServerError(error)
    }
    
  }

  return (
    <Modal toggleModal={toggleModal}>
      <Header>
        <Tittle>Bienvenido otra vez!</Tittle>
        <Subtitle>Inicia sesion con tu nombre de usuario</Subtitle>
      </Header>
  
      {serverError && (
        <div style={{ 
          backgroundColor: 'rgba(255, 0, 0, 0.1)', 
          color: 'red', 
          padding: '10px', 
          borderRadius: '5px', 
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          {serverError}
        </div>
      )}

      <Form onSubmit={handleSubmit(onSubmit)} >
        {errors.username && (
          <ErrorMessage>
            {errors.username.message}
          </ErrorMessage>
        )}
        <Input 
        type="text" 
        placeholder="Escribi tu nombre de usuario"
        {...register("username",{
          required:{
            value: true,
            message: "Porfavor ingrese el nombre de usuario",
          }
        })}
        />
        {errors.password && (
          <ErrorMessage>
            {errors.password.message}
          </ErrorMessage>
        )}
        <Input 
        type="password" 
        placeholder='Escribe tu contraseña' 
        {
          ...register("password",{
            required:{
              value: true,
              message: "Porfavor ingrese la contraseña"
            }
          })
        }
        />
        <Button>Inicia sesion</Button>
      </Form>
    </Modal>
  )
}
