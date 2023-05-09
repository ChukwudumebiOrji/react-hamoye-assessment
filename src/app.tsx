import React from "react"
import { RouterProvider } from "react-router-dom"
import router from "./routes/index"
import "./index.css"
import { AuthProvider } from "./context/authcontext"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App
