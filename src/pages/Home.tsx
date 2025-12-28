import { Box } from '@mui/material'
import { Navbar, Hero, Projects, Timeline } from '@/components'

function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
    </Box>
  )
}

export default Home

