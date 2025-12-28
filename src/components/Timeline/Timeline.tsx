import { Container, Box, Typography } from '@mui/material'
import { useTheme } from '@/context'

interface TimelineEvent {
  year: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2017',
    description: 'Início do Ensino Técnico Integrado ao Ensino Médio no Instituto Federal Campus Rio Pomba',
  },
  {
    year: '2019',
    description: 'Conclusão do Ensino Técnico Integrado ao Ensino Médio e Ingresso no curso de Ciência da Computação no Instituto Federal Campus Rio Pomba',
  },
  {
    year: '2025',
    description: 'Conclusão do curso de Ciência da Computação',
  },
]

function Timeline() {
  const { colors } = useTheme()

  return (
    <Box
      component="section"
      id="sobre-mim"
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
          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              color: colors.text,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Sobre mim
          </Typography>

          {/* Timeline Container */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 2 },
              position: 'relative',
              alignItems: { xs: 'flex-start', md: 'flex-start' },
              paddingLeft: { xs: 0, md: 0 },
            }}
          >
            {/* Timeline Line (Vertical for mobile, Horizontal for desktop) */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '-1rem', md: '1rem' },
                left: { xs: '0.3rem', md: '1rem' },
                right: 'auto',
                width: { xs: '12px', md: 'calc(100% - 2rem)' },
                height: { xs: 'calc(100% + 2rem)', md: '12px' },
                backgroundColor: colors.text,
                borderRadius: '6px',
                zIndex: 1,
              }}
            />

            {/* Timeline Events */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 3, md: 2 },
                width: '100%',
                position: 'relative',
                justifyContent: { xs: 'flex-start', md: 'space-between' },
              }}
            >
              {timelineEvents.map((event, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2, md: 2 },
                    flex: { xs: '1 1 100%', md: '1 1 auto' },
                    position: 'relative',
                    paddingLeft: { xs: '2.5rem', md: 0 },
                    alignItems: { xs: 'flex-start', md: 'center' },
                  }}
                >
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: { xs: 'absolute', md: 'relative' },
                      left: { xs: '-0.3rem', md: 'auto' },
                      top: { xs: 0, md: 'auto' },
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: colors.text,
                      zIndex: 2,
                      flexShrink: 0,
                      marginLeft: { xs: 0, md: 'auto' },
                      marginRight: { xs: 0, md: 'auto' },
                      marginTop: { xs: 0, md: '0.3rem' },
                    }}
                  />

                  {/* Year */}
                  <Typography
                    sx={{
                      color: colors.text,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontWeight: 700,
                      marginTop: { xs: 0, md: 0 },
                      textAlign: { xs: 'left', md: 'center' },
                    }}
                  >
                    {event.year}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      fontWeight: 400,
                      lineHeight: 1.6,
                      opacity: 0.74,
                      maxWidth: { xs: '100%', md: '300px' },
                      textAlign: { xs: 'left', md: 'center' },
                    }}
                  >
                    {event.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Timeline
