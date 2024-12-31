import React, { createContext, useEffect, useState } from 'react'
import { setlocalstorage, getlocalstorage } from '../utils/Localstorage'
import { use } from 'react'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {
    
    const [data, setdata] = useState(null)

    useEffect(() => {
        setlocalstorage()
        const {employees, admin} = getlocalstorage()
        setdata({employees, admin})
    }, [])

    return (
        <>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default Authprovidor