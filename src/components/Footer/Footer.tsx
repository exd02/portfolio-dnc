import { Container, Box, Typography } from '@mui/material'
import { useTheme } from '@/context'
import { SocialLinks } from '@/components/SocialLinks'
import styles from './Footer.module.css'

function Footer() {
  const { colors } = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        paddingTop: { xs: 4, md: 8 },
        paddingBottom: { xs: 4, md: 8 },
        backgroundColor: colors.navbar,
        borderTop: `1px solid ${colors.text}`,
        opacity: 0.8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 3, md: 4 },
            maxWidth: '1051px',
            margin: '0 auto',
          }}
        >
          {/* Footer Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 8 },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
            }}
          >
            {/* Left Side - Contact Info */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 3, md: 4 },
                flex: 1,
              }}
            >
              {/* Telefone */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1, md: 1.5 },
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: colors.text,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    fontWeight: 700,
                  }}
                >
                  Meu Telefone:
                </Typography>

                <Typography
                  sx={{
                    color: colors.textSecondary,
                    fontSize: { xs: '0.875rem', md: '0.9375rem' },
                    fontWeight: 400,
                    opacity: 0.74,
                  }}
                >
                  (32) 9 9967-2346
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 1, md: 1.5 },
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: colors.text,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    fontWeight: 700,
                  }}
                >
                  Meu Email:
                </Typography>

                <Typography
                  component="a"
                  href="mailto:eliamxavierdavid@gmail.com"
                  sx={{
                    color: colors.textSecondary,
                    fontSize: { xs: '0.875rem', md: '0.9375rem' },
                    fontWeight: 400,
                    opacity: 0.74,
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  eliamxavierdavid@gmail.com
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Social Links */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                alignItems: 'center',
                flex: 1,
              }}
            >
              <SocialLinks gap={3} direction="row" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
