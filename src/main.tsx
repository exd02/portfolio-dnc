import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { globalStyle } from './styles'
import App from './App.tsx'

// Inject global styles
const styleSheet = document.createElement('style')
styleSheet.textContent = globalStyle
document.head.appendChild(styleSheet)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
