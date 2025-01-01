import { createContext, useEffect, useState } from 'react'
import { setlocalstorage, getlocalstorage } from '../utils/Localstorage'

export const AuthContext = createContext()

const Authprovidor = ({children}) => {
    
    const [data, setdata] = useState(null)
    
    useEffect(() => {
        const data = getlocalstorage()
        setdata(data)
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