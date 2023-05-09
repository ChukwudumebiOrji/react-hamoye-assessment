import { useContext } from "react"
import { AuthContext } from "../context/authcontext"

export const useAuth = () => {
  // Retrieve the authentication context using useContext
  const context = useContext(AuthContext)

  // Check if the context exists
  if (!context) {
    // If the context is not found, throw an error indicating that useAuth must be used within an AuthProvider
    throw new Error("useAuth must be used within an AuthProvider")
  }

  // Return the context, which contains the user object and authentication functions
  return context
}
