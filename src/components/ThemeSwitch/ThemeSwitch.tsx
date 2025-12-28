import ReactSwitch from 'react-switch'
import { useTheme } from '@/context'

function ThemeSwitch() {
  const { theme, toggleTheme, colors } = useTheme()
  const isDark = theme === 'dark'

  return (
    <ReactSwitch
      checked={isDark}
      onChange={toggleTheme}
      onColor={colors.primary}
      offColor={colors.secondary}
      checkedIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 16,
            paddingLeft: 2,
          }}
        >
          🌙
        </div>
      }
      uncheckedIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 16,
            paddingRight: 2,
          }}
        >
          ☀️
        </div>
      }
      height={36}
      width={64}
      handleDiameter={28}
      borderRadius={18}
      aria-label="Toggle dark mode"
    />
  )
}

export default ThemeSwitch

