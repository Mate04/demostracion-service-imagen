import * as S from '../Components/Price/StylePrice'
import { useLoaderData } from 'react-router'
import { FreeCard } from '../Components/Price/FreeCard'
import { SuscriptionPlan } from '../Components/Price/SuscriptionPlan'
import { useForm } from "react-hook-form";
import {useContext, useState, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'
import Register from '../Components/NavBar/FormLogin/FormRegister'
import {getInfo} from '../service/getInfoUser'
export default function Price() {
  const [free, setFree] = useState(true)

  const res = useLoaderData();
  const freePlan = res.find(plan => plan.price === 0) || null;
  const { duration, credit } = freePlan;
  const paidPlans = res.filter(plan => plan.price > 0)
                      .sort((a, b) => a.credit - b.credit);
  
  // Configurar el hook useForm
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //token
  const { token } =useContext(AuthContext)
  const [modal, setModal] = useState(false)

  const onModel = () =>{ 
    setModal(!modal)
    //Deberia a ver token, pero react es una caca
    //y el token es null, asi que nunca va entrar aca
    if (token){
      onSubit()
    }
  }
  const onSubit = (data) => {
    if (!token) {
      setModal(true)
      return
    }
  };

  useEffect(()=>{
    const load = async() => {
      if (token){
       const user = await getInfo(token)
       setFree(!user.useTest)
      }
    }
    load()
  },[])


  return (
    <S.Container>
      <S.Header>
        <S.Title>Obten imagenes sin fondo con la mejor resolucion</S.Title>
        <S.Subtitle>1 imagen Full HD = 1 credit</S.Subtitle>
      </S.Header>
      
      <S.CardsContainer>
        {/* Trial Card */}
        {free && <FreeCard credit={credit} duration={duration} togle={onModel} />}

        {/* Subscription Card */}
        <SuscriptionPlan paidPlans={paidPlans}/>
        
      </S.CardsContainer>
      {
        modal && (
          <Register toggleModal={onModel} />
        )
      }
    </S.Container>
  )
}
