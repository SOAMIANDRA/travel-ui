'use client';

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState, FormEvent } from 'react';
import { useI18n } from '@/locales/client';
import { Destination, Offer } from '@/app/generated/prisma';
import { postReservation } from '@/app/actions/reservation';
import { useRouter } from 'next/navigation';

export default function FormBook({
  offers,
  destinations,
}: {
  offers: Offer[];
  destinations: Destination[];
}) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [passengersNumber, setPassengersNumber] = useState('');
  const [preferredOffer, setPreferredOffer] = useState('');
  const [destination, setDestination] = useState('');
  const [descriptionTrip, setDescriptionTrip] = useState('');
  const [transactionID, setTransactionID] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();
  const t = useI18n();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // On ouvre le modal pour demander le TXID
    setOpenModal(true);
  };

  const handleConfirmReservation = async () => {
    const data = {
      firstname,
      lastname,
      email,
      departureDate: new Date(departureDate),
      arrivalDate: new Date(arrivalDate),
      passengersNumber: parseInt(passengersNumber),
      prefferedOfferId: parseInt(preferredOffer),
      destinationId: parseInt(destination),
      transactionID,
      descriptionTrip,
    };

    try {
      await postReservation(data);
      setOpenModal(false);
      router.push('/');
    } catch (error) {
      console.error('Erreur lors de la réservation :', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('form-title')}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t('firstname')}
            fullWidth
            margin="normal"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label={t('lastname')}
            fullWidth
            margin="normal"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <TextField
              fullWidth
              label={t('arrival-date')}
              type="date"
              InputLabelProps={{ shrink: true }}
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
            <TextField
              fullWidth
              label={t('departure-date')}
              type="date"
              InputLabelProps={{ shrink: true }}
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <TextField
              fullWidth
              label={t('passengers-number')}
              type="number"
              value={passengersNumber}
              onChange={(e) => setPassengersNumber(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <FormControl
              fullWidth
            >
              <InputLabel id="offer-label">{t('prefered-offer')}</InputLabel>
              <Select
                labelId="offer-label"
                value={preferredOffer}
                onChange={(e) => setPreferredOffer(e.target.value)}
                label={t('prefered-offer')}
              >
                {offers.map((offer) => (
                  <MenuItem key={offer.id} value={offer.id}>
                    {offer.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
            >
              <InputLabel id="destination-label">{t('destination')}</InputLabel>
              <Select
                labelId="destination-label"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                label={t('destination')}
              >
                {destinations.map((destination) => (
                  <MenuItem key={destination.id} value={destination.id}>
                    {destination.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <TextField
            fullWidth
            label={t('description-trip')}
            multiline
            value={descriptionTrip}
            sx={{ mb: 2 }}
            onChange={(e) => setDescriptionTrip(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {t('submit')}
          </Button>
        </form>
      </Box>

      {/* ✅ Modal pour entrer le TXID */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>{t('confirm-reservation')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('enter-txid')}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Transaction ID"
            type="text"
            fullWidth
            variant="outlined"
            value={transactionID}
            onChange={(e) => setTransactionID(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>{t('cancel')}</Button>
          <Button onClick={handleConfirmReservation} variant="contained">
            {t('confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
