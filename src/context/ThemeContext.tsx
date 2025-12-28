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
* {
  font-family: "Poppins", sans-serif !important;
}
body, html {
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: "Poppins", sans-serif !important;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.MuiTypography-root {
  font-family: "Poppins", sans-serif !important;
}
h1 {
  color: ${colors.text};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
  padding: 0;
}
h2 {
  color: ${colors.text};
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0;
  padding: 0;
}
h3 {
  color: ${colors.text};
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;
  padding: 0;
}
p {
  color: ${colors.text};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}
ul, li, figure {
  margin: 0;
  padding: 0;
}
`
  }
}

