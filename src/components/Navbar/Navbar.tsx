import { NavLink } from '../NavLink'
import { IconButton } from '../IconButton'
import { GitHubIcon, LinkedInIcon } from '../icons'
import styles from './Navbar.module.css'

interface NavItem {
  label: string
  href?: string
  onClick?: () => void
}

interface SocialLink {
  icon: React.ReactNode
  href: string
  ariaLabel: string
}

interface NavbarProps {
  navItems?: NavItem[]
  socialLinks?: SocialLink[]
}

const defaultNavItems: NavItem[] = [
  { label: 'Projetos' },
  { label: 'Tecnologias' },
  { label: 'Sobre mim' },
]

const defaultSocialLinks: SocialLink[] = [
  {
    icon: <GitHubIcon size={32} color="#fff" />,
    href: 'https://github.com',
    ariaLabel: 'GitHub',
  },
  {
    icon: <LinkedInIcon size={32} color="#fff" />,
    href: 'https://linkedin.com',
    ariaLabel: 'LinkedIn',
  },
]

function Navbar({ navItems = defaultNavItems, socialLinks = defaultSocialLinks }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} onClick={item.onClick}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <IconButton
              key={link.ariaLabel}
              href={link.href}
              ariaLabel={link.ariaLabel}
            >
              {link.icon}
            </IconButton>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

