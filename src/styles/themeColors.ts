export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  surface: string
  text: string
  textSecondary: string
  icon: string
  navbar: string
}

export const darkThemeColors: ThemeColors = {
  primary: '#1976d2',
  secondary: '#b45309',
  background: 'rgb(15, 22, 36)',
  surface: 'rgb(15, 22, 36)',
  text: '#ffffff',
  textSecondary: '#ffffff',
  icon: '#ffffff',
  navbar: 'rgb(15, 22, 36)',
}

export const lightThemeColors: ThemeColors = {
  primary: '#1976d2',
  secondary: '#b45309',
  background: '#ffffff',
  surface: '#ffffff',
  text: '#000000',
  textSecondary: '#000000',
  icon: '#000000',
  navbar: '#ffffff',
}

export function getThemeColors(theme: 'light' | 'dark'): ThemeColors {
  return theme === 'dark' ? darkThemeColors : lightThemeColors
}

