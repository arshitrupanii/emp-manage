import React, { createContext } from 'react'
import App from '../App'
import { setlocalstorage, getlocalstorage } from '../utils/Localstorage'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {
    setlocalstorage()
    const data = getlocalstorage()

    return (
        <>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Authprovidor