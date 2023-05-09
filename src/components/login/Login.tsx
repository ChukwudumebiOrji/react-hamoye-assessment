import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()
  const { user, logUserIn } = useAuth()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    logUserIn({ email, password }) // Attempt to log the user in with provided email and password
    if (user) {
      navigate("/dashboard") // If user is logged in, navigate to the dashboard
    } else {
      setError(true) // If login failed, set error state to display error message
      setTimeout(() => setError(false), 2000) // Clear error state after 2 seconds
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-login-bg bg-cover bg-center"></div>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-2xl">
          <h1 className="uppercase text-center text-3xl mb-8 text-orange-custom">
            Sign in
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="formgroup mb-8">
              <label
                htmlFor="email"
                className="block mb-4 text-xl text-orange-custom"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                className="border border-[#ae9c98] focus:border-orange-custom outline-none w-full p-4 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div className="formgroup mb-8">
              <label
                htmlFor="password"
                className="block mb-4 text-xl text-orange-custom"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-[#ae9c98] focus:border-orange-custom outline-none w-full p-4 rounded-lg"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center text-md text-orange-custom mb-6">
              <input
                type="checkbox"
                className="h-3 w-3 border-[#ae9c98] mr-2"
                id="keepSignedIn"
              />
              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>

            {error && (
              <div className="text-center text-red-500 my-4">
                Invalid email or password!
              </div>
            )}

            <button
              type="submit"
              className="bg-orange-custom text-white block mt-8 py-2 px-16 mx-auto rounded-lg hover:bg-opacity-80 duration-300"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
