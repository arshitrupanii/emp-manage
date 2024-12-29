import React, { createContext } from 'react'
import App from '../App'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {

    return (
        <>
            <AuthContext.Provider value={"arshit"}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Authprovidor