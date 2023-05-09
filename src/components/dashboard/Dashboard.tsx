import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { dashboardLinks } from "../../assets/mock-db"
import Logout from "../logout/logout"
import { useAuthProtectedRoute } from "../../hooks/useAuthProtectedRoute"

const Dashboard = () => {
  useAuthProtectedRoute()

  const [linkNumber, setLinkNumber] = useState(0)
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  const openLogoutModal = () => {
    setIsLogoutOpen(true)
  }

  return (
    <div className="h-screen w-screen flex font-ysabeau">
      <div className="flex flex-col min-w-[17.5vw] text-very-dark-orange border-r border-r-very-dark-orange">
        {/* LOGO */}
        <div className="my-8">
          <h1 className="text-center font-bold text-2xl py-2">
            <b>Steady</b>Flights
          </h1>
        </div>

        <div className="my-16 text-right">
          {dashboardLinks.map(({ link, name }, i) => (
            <Link
              key={i}
              to={link}
              className={linkNumber === i ? "active-link" : "inactive-link"}
              onClick={() => {
                setLinkNumber(i)
              }}
            >
              {name}
            </Link>
          ))}
        </div>

        <button className="my-8 block" onClick={openLogoutModal}>
          Log out
        </button>

        <Logout
          isLogoutOpen={isLogoutOpen}
          setIsLogoutOpen={setIsLogoutOpen}
        ></Logout>
      </div>

      <div className="w-[82.5vw]">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
