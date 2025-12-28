import { ReactNode } from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps {
  href?: string
  children: ReactNode
  ariaLabel: string
  onClick?: () => void
  className?: string
}

function IconButton({ href, children, ariaLabel, onClick, className }: IconButtonProps) {
  const combinedClassName = `${styles.iconButton} ${className || ''}`.trim()

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton

