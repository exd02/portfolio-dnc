import { Box, Typography } from '@mui/material'
import { useTheme } from '@/context'
import { GradientButton } from '../GradientButton'
import styles from './Project.module.css'

interface ProjectProps {
  title: string
  image: string
  text: string
  href: string
}

function Project({ title, image, text, href }: ProjectProps) {
  const { colors } = useTheme()

  return (
    <Box
      className={styles.project}
      sx={{
        backgroundColor: colors.surface,
        boxShadow: `0 0 12px ${colors.text}`,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        className={styles.projectImage}
        sx={{
          width: '100%',
          height: '266px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: 3,
        }}
      />
      <Typography
        variant="h2"
        className={styles.projectTitle}
        sx={{
          color: colors.text,
          fontSize: { xs: '1.25rem', md: '2rem' },
          fontWeight: 700,
          marginBottom: 3,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        sx={{
          color: colors.textSecondary,
          fontSize: { xs: '0.875rem', md: '1rem' },
          lineHeight: 1.6,
          marginBottom: 4,
        }}
      >
        {text}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 'auto' }}>
        <GradientButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectButton}
        >
          Clique aqui
        </GradientButton>
      </Box>
    </Box>
  )
}

export default Project

