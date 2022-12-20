import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) =>{
    const [useremail,setUserEmail] = useState({email:""})
    return <LoginContext.Provider value={{useremail,setUserEmail}}>{children}</LoginContext.Provider>
}