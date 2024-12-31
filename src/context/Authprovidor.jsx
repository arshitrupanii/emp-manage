import React, { createContext, useState } from 'react'
import App from '../App'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {

    const [Userdata, setUserdata] = useState([])

    return (
        <>
            <AuthContext.Provider value={"arshit"}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Authprovidor