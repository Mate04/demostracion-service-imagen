import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Register from '../NavBar/FormLogin/FormRegister';
import * as S from './StylePrice';
import { AuthContext } from '../../context/AuthContext';
import {createPay} from '../../service/getTypeSuscription'


export const SuscriptionPlan = ({paidPlans}) => {
    const { token } =useContext(AuthContext)
    const [modal, setModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null); 

    
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const onModel = () =>{ 
        setModal(!modal)
        //Deberia a ver token, pero react es una caca
        //y el token es null, asi que nunca va entrar aca
        if (token){
          onSubit()
        }
      }
    
    const onSubit = async (data) => {
        if (!token) {
          setModal(true)
          return
        }
        try {
            const response = await createPay(data, token);
            const link = response.link; // Extraer el enlace
            window.location.href = link; // Redirige al enlace
        } catch (error) {
            console.error('Error al crear el pago:', error);
        }
      };


      const handlePlanChange = (plan) => {
        setSelectedPlan(plan); // Actualizar el estado con el plan seleccionado
        };
  return (
    <>
         <S.Card>
            {
                selectedPlan ? (
                    <>
                    <S.PlanType>
                        <span>💎</span>
                        Plan
                    </S.PlanType>
                    <S.PlanTitle>{selectedPlan.suscriptionType}</S.PlanTitle>
                    <S.Credits>({selectedPlan.credit} credits)</S.Credits>
                    <S.Price>
                        {selectedPlan.price} US$<span>/mes</span>
                    </S.Price>
                    </>
                ):(
                    <>
                    <S.PlanType>
                        <span>💎</span>
                        Lo mejores planes
                    </S.PlanType>
                    <S.PlanTitle>Comenza a disfutar</S.PlanTitle>
                    <S.Price>
                        Al mejor precio
                    </S.Price>
                    </>
                )
            }
          
          {errors.suscriptionType && <span>{errors.suscriptionType.message}</span>} {/* Mostrar error si no selecciona */}
          <form onSubmit={handleSubmit(onSubit)}>
            
            {paidPlans.map((plan) => (
              <S.CreditOption key={plan.suscriptionType}>
                
                <label>
                  <S.Radio 
                    type="radio"
                    name="plan"
                    value={plan.suscriptionType}
                    {...register("suscriptionType", { required: "Please select a plan" })} // Registrar con react-hook-form
                    onChange={() => handlePlanChange(plan)}
                  />
                  {plan.credit} credits
                </label>
                <span>{plan.price} US$</span>
              </S.CreditOption>
            ))}
            <S.Button type="submit">Subscribe now</S.Button>
          </form>

        </S.Card>
        {
        modal && (
          <Register toggleModal={onModel} />
        )
      }
    </>
  )
}
