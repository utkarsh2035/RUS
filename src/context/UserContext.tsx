import React from 'react'
import { createContext } from 'react'

export const dataContext = createContext()
const UserContext = ({children}:any) => {
    const user = {
        name:"Utkarsh",
        age: 18,
        city: "Noida",
    }
  return (
    <div>
        <dataContext.Provider value={user}>
            {children}
        </dataContext.Provider>

    </div>
  )
}

export default UserContext
