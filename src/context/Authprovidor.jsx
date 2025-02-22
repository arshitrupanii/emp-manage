import { createContext, useEffect, useState } from 'react'
import { setlocalstorage, getlocalstorage } from '../utils/Localstorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [data, setdata] = useState(null)

    useEffect(() => {
        const storedData = getlocalstorage()
        setdata(storedData)
    }, [])

    return (
        <AuthContext.Provider value={{ data, setdata }}>  {/* Provide setter */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
