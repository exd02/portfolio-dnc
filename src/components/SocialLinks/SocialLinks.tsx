import { Box } from '@mui/material'
import { useTheme } from '@/context'
import { IconButton } from '@/components/IconButton'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import styles from './SocialLinks.module.css'

interface SocialLink {
  icon: React.ReactNode
  href: string
  ariaLabel: string
}

interface SocialLinksProps {
  gap?: number | string
  justifyContent?: string
  direction?: 'row' | 'column'
}

function SocialLinks({
  gap = 2,
  justifyContent = 'center',
  direction = 'row',
}: SocialLinksProps) {
  const { colors } = useTheme()

  const socialLinks: SocialLink[] = [
    {
      icon: <GitHubIcon size={32} color={colors.icon} />,
      href: 'https://github.com/exd02',
      ariaLabel: 'GitHub',
    },
    {
      icon: <LinkedInIcon size={32} color={colors.icon} />,
      href: 'https://www.linkedin.com/in/eliam-david-071448232/',
      ariaLabel: 'LinkedIn',
    },
  ]

  return (
    <Box
      className={styles.socialLinks}
      sx={{
        display: 'flex',
        gap,
        justifyContent,
        flexDirection: direction,
      }}
    >
      {socialLinks.map((link) => (
        <IconButton
          key={link.ariaLabel}
          href={link.href}
          ariaLabel={link.ariaLabel}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default SocialLinks
