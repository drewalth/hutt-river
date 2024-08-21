import {
  ThemeProvider as BaseThemeProvider,
  createTheme,
} from '@mui/material/styles'
import { createContext, ReactNode, useContext, useState } from 'react'
import { PaletteMode } from '@mui/material'
import getLPTheme from '../getLPTheme.tsx'

interface ThemeProviderProps {
  children: ReactNode
}

export interface ThemeContext {
  mode: PaletteMode
  toggleColorMode: () => void
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const useThemeContext = (): ThemeContext => useContext(ThemeContext)

const isDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(() =>
    isDarkMode() ? 'dark' : 'light',
  )
  const LPtheme = createTheme(getLPTheme(mode))

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <BaseThemeProvider theme={LPtheme}>
      <ThemeContext.Provider value={{ mode, toggleColorMode }}>
        {children}
      </ThemeContext.Provider>
      ,
    </BaseThemeProvider>
  )
}

export default ThemeProvider
