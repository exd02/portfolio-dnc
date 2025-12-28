import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@/context'
import { darkThemeColors } from '@/styles/themeColors'
import { muiTheme } from '@/styles/muiTheme'
import App from '@/App'

// Inject global styles with ID for theme updates
// Initial styles will be updated by ThemeProvider
const styleSheet = document.createElement('style')
styleSheet.id = 'global-styles'
styleSheet.textContent = `
* {
  font-family: "Poppins", sans-serif !important;
}
body, html {
  background-color: ${darkThemeColors.background};
  color: ${darkThemeColors.text};
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
document.head.appendChild(styleSheet)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </StrictMode>,
)
