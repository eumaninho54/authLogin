import React, { createContext, useState } from 'react'

export const GoogleAuthContext = createContext<{}>({})

export default function GoogleAuthProvider({children}: { children: React.ReactNode}){
  const [state, setState] = useState(null)

  return (
    <GoogleAuthContext.Provider value={{state, setState}}>
      {children}
    </GoogleAuthContext.Provider>
  )
}