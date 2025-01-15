import {Header, Button, Form, ErrorMessage, CartelError} from '../Style.LogIn'
import {FormContainer, Title, Subtitle, InputWrapper, IconWrapper,Input} from './RegisteStyle'
import { Mail, Lock ,User} from 'lucide-react'
import Modal from '../../Modal/Modal'
import { useForm } from "react-hook-form";
import {useState} from 'react'
import {AuthContext} from '../../../context/AuthContext'
import {useContext} from 'react'
import {register as registerAuth} from '../../../service/auth'

export default function FormRegister({toggleModal}) {

    const { setToken } = useContext(AuthContext);
    const [serverError, setServerError] = useState(null);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const onSubmit = async (data) => {
        setServerError(null)
        try {
            const token = await registerAuth(data)
            setToken(token)
            toggleModal()
            window.location.reload();  // Recarga la página después de cerrar el modal
        } catch (error) {
            setServerError(error)
        }
      }
      
    
    return (
        <Modal toggleModal={toggleModal}>
            <FormContainer>
                <Title>Comienza con 7 dias gratis de prueba</Title>
                <Subtitle>Logueate con tu mail y un usuario</Subtitle>
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
                <form onSubmit={handleSubmit(onSubmit)} >
                <InputWrapper>
                        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                        <IconWrapper>
                            <User size={18} />
                        </IconWrapper>
                        <Input 
                            type="text" 
                            placeholder="username"
                            {...register("username",{
                                required:{
                                    value: true,
                                    message: "Porfavor ingrese el nombre de usuario",
                                },
                                minLength: {
                                    value: 3,
                                    message: "El nombre de usuario debe tener al menos 3 caracteres",
                                },
                                maxLength: {
                                    value: 12,
                                    message: "El nombre de usuario no debe exceder los 12 caracteres",
                                }
                            })}
                        />
                        
                    </InputWrapper>
                    <InputWrapper>
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        <IconWrapper>
                            <Mail size={18} />
                        </IconWrapper>
                        <Input 
                            type="email" 
                            placeholder="name@email.com"
                            {...register("email",{
                                required:{
                                    value: true,
                                    message: "Porfavor ingrese un mail",
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Por favor, ingrese un correo electrónico válido",
                                }
                            })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                    <IconWrapper>
                        <Lock size={18} />
                    </IconWrapper>
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    <Input 
                        type="password" 
                        placeholder="Type your password here"
                        {...register("password",{
                            required:{
                                value: true,
                                message: "Porfavor ingrese una contraseña",
                            },
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres",
                            },
                        })}
                    />
                    </InputWrapper>
                    <Button>Registrar gratis</Button>
                </form>
            </FormContainer>
        </Modal>
    )
}
