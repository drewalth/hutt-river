import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import AppAppBar from './components/AppAppBar.tsx'
import Hero from './components/Hero.tsx'
import LogoCollection from './components/LogoCollection.tsx'
import Highlights from './components/Highlights.tsx'
import FAQ from './components/FAQ.tsx'
import Footer from './components/Footer.tsx'
import GaugeCharts from './components/GaugeCharts.tsx'
import Description from './components/Description.tsx'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Description />
        <Divider />
        <GaugeCharts />
        <Divider />
        <Highlights />
        <Divider />
        <Divider />
        <LogoCollection />
        <Divider />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  )
}

export default App
