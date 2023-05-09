import { ILink } from "../types/link"
import { IUser } from "../types/user"

export const users: IUser[] = [
  {
    email: "john@doe.com",
    password: "password",
  },
  {
    email: "jane@doe.com",
    password: "password",
  },
]

export const dashboardLinks: ILink[] = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Discover", link: "/dashboard/discover" },
  { name: "Favorites", link: "/dashboard/favorites" },
  { name: "Tickets", link: "/dashboard/tickets" },
  { name: "Settings", link: "/dashboard/settings" },
]
