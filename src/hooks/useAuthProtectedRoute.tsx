import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"

export const useAuthProtectedRoute = () => {
  const nav = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    // Check if the user is not logged in
    if (!user) {
      // Redirect to the login page or any other route you prefer
      nav("/log-in")
    }
  }, [user])
}
