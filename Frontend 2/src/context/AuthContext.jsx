import { createContext, useState } from "react";
import {getCokie} from '../script/getCokie'
export const AuthContext = createContext();

export const AuthProvider =({children}) => {
    const [token, setToken] = useState(()=>{
        const tokenCookie = getCokie("auth-token");
        return tokenCookie ? tokenCookie: null
    })
  return (
    <AuthContext.Provider value={{ token, setToken }}>
        {children}
    </AuthContext.Provider>
  )
}
