// const GaugeCharts = () => {
//   return (
//     <iframe id="widget-iframe" width="360px" height="640px"
//             src="https://flowrate.co.nz/river/hutt-river/birchville/widget" allowTransparency
//             style={{ border:"none" }}></iframe>
//   )
// }
//
// export default GaugeCharts

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const items = [
  `<iframe id="widget-iframe" width="360px" height="640px" src="https://flowrate.co.nz/river/hutt-river/kaitoke/widget" allowtransparency="true" style="border:none"></iframe>`,
      `<iframe id="widget-iframe" width="360px" height="640px" src="https://flowrate.co.nz/river/hutt-river/birchville/widget" allowtransparency="true" style="border:none"></iframe>`,
  `<iframe id="widget-iframe" width="360px" height="640px" src="https://flowrate.co.nz/river/hutt-river/taita-gorge/widget" allowtransparency="true" style="border:none"></iframe>`
]

export default function GaugeCharts() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Gauges
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Provided by flowrate.co.nz
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                  maxHeight: "500px"
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: item}} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
