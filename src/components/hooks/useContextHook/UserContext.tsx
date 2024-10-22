import { createContext, useState } from "react";

export type AuthUser = {
  name: string,
  email: string
}

export type UserContextProviderProps = {
  children: React.ReactNode
}

export type UserContextType = {
  user: AuthUser | null,
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({children}: UserContextProviderProps ) => {

  const [user, setUser] = useState<AuthUser | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
}