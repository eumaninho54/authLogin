import React, { createContext, useEffect, useState } from 'react'
import { authModel } from '../models/authModel'

interface contextModel {
  infoLogin?: authModel | null
  setInfoLogin?: any
  authenticated?: boolean
  setAuthenticated?: any
}

export const AuthContext = createContext<contextModel>({})

export default function AuthProvider({children}: any){
  const [infoLogin, setInfoLogin] = useState<authModel | null>(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('accessToken') && infoLogin != null){
      setAuthenticated(true)
    }
  }, [infoLogin])

  return (
    <AuthContext.Provider value={{infoLogin, setInfoLogin, authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}