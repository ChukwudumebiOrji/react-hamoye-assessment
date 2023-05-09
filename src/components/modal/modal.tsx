import React from "react"

const Modal = ({ isOpen, children }: any) => {
  if (!isOpen) return null

  return (
    <div className="fixed w-screen h-screen z-50 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="opacity-100 bg-white rounded-lg shadow-lg p-6">
        {children}
      </div>
    </div>
  )
}

export default Modal
