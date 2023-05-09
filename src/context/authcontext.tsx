import { createContext, useContext, useState } from "react"
import { IUser } from "../types/user"
import { AuthContextType } from "../types/authContext"
import { users } from "../assets/mock-db"

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider component
export const AuthProvider = ({ children }: any) => {
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null)

  // Log in the user
  const logUserIn = (user: IUser) => {
    const findUser = users.find((el) => el.email === user.email)
    if (!findUser || findUser.password !== user.password) setLoggedUser(null)
    else setLoggedUser(user)
  }

  // Log out the user
  const logUserOut = () => {
    setLoggedUser(null)
  }

  // Create the authContextValue
  const authContextValue: AuthContextType = {
    user: loggedUser,
    logUserIn,
    logUserOut,
  }

  // Provide the authContextValue to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}
