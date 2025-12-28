import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { getThemeColors, type ThemeColors } from '@/styles/themeColors'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  colors: ThemeColors
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    return savedTheme || 'dark'
  })

  const colors = getThemeColors(theme)

  useEffect(() => {
    // Initialize theme on mount
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark'
    document.documentElement.setAttribute('data-theme', savedTheme)
    updateGlobalStyles(getThemeColors(savedTheme))
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
    updateGlobalStyles(colors)
  }, [theme, colors])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function updateGlobalStyles(colors: ThemeColors): void {
  const styleSheet = document.getElementById('global-styles')
  if (styleSheet) {
    styleSheet.textContent = `
body, html {
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}
h1, h2, p, ul, li, figure {
  margin: 0;
  padding: 0;
}
`
  }
}

