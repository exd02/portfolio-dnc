import { ReactNode } from 'react'
import styles from './NavLink.module.css'

interface NavLinkProps {
  href?: string
  children: ReactNode
  onClick?: () => void
  className?: string
}

function NavLink({ href, children, onClick, className }: NavLinkProps) {
  const combinedClassName = `${styles.navLink} ${className || ''}`.trim()

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  )
}

export default NavLink

