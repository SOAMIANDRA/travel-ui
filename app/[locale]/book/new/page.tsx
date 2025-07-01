"use client"
import { useI18n } from '@/locales/client';
import { 
  Box, 
  Button, 
  Container, 
  Stack, 
  TextField, 
  Typography, 
} from '@mui/material';
import React from 'react'

function page() {
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [departureDate, setDepartureDate] = React.useState("");
  const [arrivalDate, setArrivalDate] = React.useState("");
  const [passengersNumber, setPassengersNumber] = React.useState("");
  const [preferredOffer, setPreferredOffer] = React.useState("");
  const [cryptoAddress, setCryptoAddress] = React.useState("");
  const [descriptionTrip, setDescriptionTrip] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const t = useI18n();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log({
      name,
      email,
    });
    
  };
  return (
    <>
    <Container
      maxWidth="lg"
    >
      <Box 
        sx={{ my: 1 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {t('form-title')}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t('firstname')}
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label={t('lastname')}
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Stack
            direction="row"
            spacing={2}
            sx={{my:2}}
          >
            <TextField
              fullWidth
              label={t('arrival-date')}
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink : true }}
              value={arrivalDate}
              onChange={
                (e) => setArrivalDate(e.target.value)
              }
            />
            <TextField
              fullWidth
              label={t('departure-date')}
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink : true }}
              value={departureDate}
              onChange={
                (e) => setDepartureDate(e.target.value)
              }
            />
            <TextField
              fullWidth
              label={t('passengers-number')}
              variant="outlined"
              type="number"
              value={passengersNumber}
              onChange={
                (e) => setPassengersNumber(e.target.value)
              }
            />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{mb:2}}
          >
            <TextField
              fullWidth
              label={t('wallet-crypto')}
              variant="outlined"
              value={cryptoAddress}
              onChange={
                (e) => setCryptoAddress(e.target.value)
              }
            />
            <TextField
              fullWidth
              label={t('prefered-offer')}
              variant="outlined"
              type=""
              value={preferredOffer}
              onChange={
                (e) => setPreferredOffer(e.target.value)
              }
            />
            <TextField
              fullWidth
              label={t('destination')}
              variant="outlined"
              type=""
              value={destination}
              onChange={
                (e) => setDestination(e.target.value)
              }
            />
          </Stack>
          <TextField
              fullWidth
              label={t('description-trip')}
              variant="outlined"
              type="text"
              multiline
              value={descriptionTrip}
              sx={{mb:2}}
              onChange={
                (e) => setDescriptionTrip(e.target.value)
              }
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
          >
            {t('submit')}
          </Button>
        </form>
      </Box>
    </Container>
    </>
  )
}

export default page