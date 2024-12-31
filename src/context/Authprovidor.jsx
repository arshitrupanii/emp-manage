import React, { createContext } from 'react'
import App from '../App'
import { setlocalstorage, getlocalstorage } from '../utils/Localstorage'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {

    return (
        <>
            <AuthContext.Provider value={Userdata}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Authprovidor