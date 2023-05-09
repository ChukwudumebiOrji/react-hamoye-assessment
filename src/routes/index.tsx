import { Navigate, Routes, createBrowserRouter } from "react-router-dom"
import Login from "../components/login/Login"
import InProgress from "../components/dashboard/inProgress"
import NotFound from "../components/notFound/notFound"
import Dashboard from "../components/dashboard/Dashboard"
import Index from "../components/dashboard"
import Logout from "../components/logout/logout"

const routes = [
  { path: "", element: <Navigate to="/log-in" /> },
  { path: "/log-in", element: <Login /> },
  {
    element: <Dashboard />,
    path: "/dashboard",
    children: [
      { index: true, element: <Index /> },
      {
        path: "discover",
        element: <InProgress />,
      },
      {
        path: "favorites",
        element: <InProgress />,
      },
      {
        path: "tickets",
        element: <InProgress />,
      },
      {
        path: "settings",
        element: <InProgress />,
      },
    ],
  },
  { path: "/log-out", element: <Logout /> },
  { path: "*", element: <NotFound /> },
]

const router = createBrowserRouter(routes)

export default router
