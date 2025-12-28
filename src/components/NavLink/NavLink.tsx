import { type ReactNode } from 'react'
import { useTheme } from '@/context'
import styles from './NavLink.module.css'

interface NavLinkProps {
  href?: string
  children: ReactNode
  onClick?: () => void
  className?: string
}

function NavLink({ href, children, onClick, className }: NavLinkProps) {
  const { colors } = useTheme()
  const combinedClassName = `${styles.navLink} ${className || ''}`.trim()

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick} style={{ color: colors.text }}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={combinedClassName} onClick={onClick} style={{ color: colors.text }}>
      {children}
    </button>
  )
}

export default NavLink

