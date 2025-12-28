import { Box } from '@mui/material'
import { Navbar, Hero, Projects, Timeline, Footer } from '@/components'

function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
      <Footer />
    </Box>
  )
}

export default Home

