import { type ReactNode } from 'react'
import { Button } from '@mui/material'
import styles from './GradientButton.module.css'

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
}

function GradientButton({ children, onClick, href, target, rel, className }: GradientButtonProps) {
  const combinedClassName = `${styles.gradientButton} ${className || ''}`.trim()

  if (href) {
    return (
      <Button
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        onClick={onClick}
        sx={{
          width: { xs: '100%', sm: '280px' },
          height: '80px',
          borderRadius: '83px',
          fontSize: '1.125rem',
          fontWeight: 600,
          textTransform: 'none',
          color: '#ffffff',
        }}
      >
        {children}
      </Button>
    )
  }

  return (
    <Button
      className={combinedClassName}
      onClick={onClick}
      sx={{
        width: { xs: '100%', sm: '280px' },
        height: '80px',
        borderRadius: '83px',
        fontSize: '1.125rem',
        fontWeight: 600,
        textTransform: 'none',
        color: '#ffffff',
      }}
    >
      {children}
    </Button>
  )
}

export default GradientButton

