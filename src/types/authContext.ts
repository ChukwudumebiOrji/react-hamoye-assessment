import { IUser } from "./user"

export type AuthContextType = {
  user: IUser | null
  logUserIn: (user: IUser) => void
  logUserOut: () => void
}
