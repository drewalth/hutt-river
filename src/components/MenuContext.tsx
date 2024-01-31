import React, { useContext, useState } from "react"

// Create the context
const MenuContext = React.createContext({} as MenuContextData)

interface MenuProviderProps {
  children: React.ReactNode
}

interface MenuContextData {
  isOpen: boolean
  setNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  // Place state in here
  const [isOpen, setNav] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, setNav }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => useContext(MenuContext)

export default MenuContext
