import { useEffect } from "react"
import {setlocalstorage, getlocalstorage } from '../utils/Localstorage'

const Authcontext = ({children}) => {
    useEffect(() => {
        setlocalstorage()
        getlocalstorage()
      }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default Authcontext
