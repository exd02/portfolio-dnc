import { Container, Box, Typography } from '@mui/material'
import { useTheme } from '@/context'
import { GradientButton } from '../GradientButton'
import styles from './Hero.module.css'
import type { ReactNode } from 'react'

interface HeroProps {
  title?: string
  description?: ReactNode
  buttonText?: string
}

function Hero({
  title = 'Desenvolvedor Full-Stack',
  description = (
    <>
      Sou Eliam, Desenvolvedor Full Stack, com atuação predominante em backend. Desenvolvi este site como parte de uma tarefa em que era obrigatório selecionar e adaptar um template. Além disso, desenvolvi outro site do zero, mais alinhado com minha identidade e forma de trabalhar, disponível em{' '}
      <a href="https://eliam.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
        eliam.dev
      </a>.
    </>
  ),
  buttonText = 'Saber mais',
}: HeroProps) {
  const { colors } = useTheme()

  return (
    <Box
      component="section"
      className={styles.hero}
      sx={{
        width: '100%',
        paddingTop: { xs: 4, md: 8 },
        paddingBottom: { xs: 4, md: 8 },
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
          <Typography
            variant="h1"
            sx={{
              color: colors.text,
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: colors.textSecondary,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              opacity: 0.74,
              maxWidth: '989px',
            }}
          >
            {description}
          </Typography>
          <Box sx={{ marginTop: { xs: 2, md: 4 } }}>
            <GradientButton href="https://eliam.dev" target="_blank" rel="noopener noreferrer">
              {buttonText}
            </GradientButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero

