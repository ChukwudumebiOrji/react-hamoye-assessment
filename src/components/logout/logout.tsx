import React from "react"
import Modal from "../modal/modal"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const Logout = ({ isLogoutOpen, setIsLogoutOpen }: any) => {
  const { logUserOut } = useAuth()
  const nav = useNavigate()

  const handleLogout = () => {
    setIsLogoutOpen(false) // Close the logout modal
    logUserOut() // Perform the logout action
    nav("") // Navigate to login page
  }

  const cancelLogout = () => {
    setIsLogoutOpen(false) // Close the logout modal without performing any action
  }

  return (
    <Modal isOpen={isLogoutOpen}>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="text-lg mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-4 rounded"
          >
            Logout
          </button>
          <button
            onClick={cancelLogout}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default Logout
