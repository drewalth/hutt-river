import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import eventData from '../event-data/eventData.ts'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system'

const Description = () => {
  const theme = useTheme()
  const largerScreen = useMediaQuery(theme.breakpoints.up('md'))
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
            width: { xs: '90%', sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant={largerScreen ? 'h4' : 'h5'}>
            {`${eventData.formattedDate}`}
          </Typography>
          <Typography
            component="h2"
            variant={largerScreen ? 'h4' : 'h5'}
            sx={{
              mb: 3,
            }}
          >
            {`@ ${eventData.location?.name || 'TBA'}`}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'grey.300', overflowWrap: 'anywhere' }}
          >
            {eventData.description}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Description
