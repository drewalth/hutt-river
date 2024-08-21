import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import eventData from '../event-data/eventData.ts'

export default function Description() {
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
            {`${eventData.formattedDate} @ ${eventData.location?.name || 'TBA'}`}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            {eventData.description}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
