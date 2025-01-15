
import { useNavigate, useParams} from 'react-router'
import { useEffect,useContext } from 'react'
import {getPaymentStatus} from '../service/payment'
import { AuthContext } from '../context/AuthContext'


export default function LoaderPayment() {
    const navigate = useNavigate();
    const { token } =useContext(AuthContext)
    const { id } = useParams()

    useEffect(()=>{
        const checkPaymentStatus = async () => {
            try {
                const paymentStatus = await getPaymentStatus(id,token);
                
                const result =paymentStatus.status;
                
                console.log(result);
                
                if (result != "open") {
                    if (result == "paid") navigate('/');
                }  
            } catch (error) {
                console.log(error);
            }
            
        }
        checkPaymentStatus()
    },[])

    return (
        <div>LoaderPayment {id}</div>
    )
}
