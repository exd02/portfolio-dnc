import { useState } from 'react'
import { Container, Box, IconButton as MuiIconButton, Drawer, List, ListItem, Typography, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from '@/components/NavLink'
import { IconButton } from '@/components/IconButton'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { useTheme } from '@/context'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
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

function Navbar({ navItems = defaultNavItems, socialLinks }: NavbarProps) {
  const { colors } = useTheme()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)

  const defaultSocialLinksWithTheme: SocialLink[] = [
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

  const displaySocialLinks = socialLinks || defaultSocialLinksWithTheme

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: colors.navbar,
        color: colors.text,
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ color: colors.text, fontWeight: 600 }}>
          Menu 
        </Typography>
        <MuiIconButton 
          onClick={handleDrawerToggle} 
          sx={{ color: colors.text, padding: 1 }}
          aria-label="close menu"
        >
          <CloseIcon />
        </MuiIconButton>
      </Box>
      <Box sx={{ mb: 3 }}>
        <ThemeSwitch />
      </Box>
      <List sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} sx={{ padding: 0, mb: 2 }}>
            <NavLink
              href={item.href}
              onClick={() => {
                item.onClick?.()
                handleDrawerToggle()
              }}
            >
              {item.label}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          paddingTop: 2,
        }}
      >
        {displaySocialLinks.map((link) => (
          <IconButton
            key={link.ariaLabel}
            href={link.href}
            ariaLabel={link.ariaLabel}
          >
            {link.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '137px' },
        minHeight: { xs: '80px', md: '137px' },
        padding: { xs: '1rem 0', md: 0 },
        position: 'relative',
        backgroundColor: colors.navbar,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ flex: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  flex: 1,
                  textAlign: 'center',
                }}
              >
                Eliam Portfolio
              </Typography>
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <MuiIconButton
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: colors.text }}
                  aria-label="menu"
                >
                  <MenuIcon />
                </MuiIconButton>
              </Box>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  flex: { xs: 0, md: 1 },
                  display: { xs: 'none', md: 'block' },
                }}
              />
              <Box
                sx={{
                  flex: { xs: 1, md: 1 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div className={styles.navLinks} style={{ gap: 'clamp(1.5rem, 3rem, 3rem)' }}>
                  {navItems.map((item) => (
                    <NavLink key={item.label} href={item.href} onClick={item.onClick}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </Box>
              <Box
                sx={{
                  flex: { xs: 1, md: 1 },
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  alignItems: 'center',
                }}
              >
                <div className={styles.socialLinks} style={{ gap: 'clamp(1rem, 1.5rem, 1.5rem)' }}>
                  {displaySocialLinks.map((link) => (
                    <IconButton
                      key={link.ariaLabel}
                      href={link.href}
                      ariaLabel={link.ariaLabel}
                    >
                      {link.icon}
                    </IconButton>
                  ))}
                </div>
                <Box sx={{ marginLeft: { xs: 3, md: 6 } }}>
                  <ThemeSwitch />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Container>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Navbar

