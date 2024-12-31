import React, { createContext,useEffect,useState } from 'react'
import App from '../App'
import { setlocalstorage, getlocalstorage } from '../utils/Localstorage'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {

    const [Userdata, setUserdata] = useState(null)

    useEffect(() => {
        const {employee,admin} = getlocalstorage()
        setUserdata({employee,admin});
    },[])
    


    return (
        <>
            <AuthContext.Provider value={Userdata}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Authprovidor