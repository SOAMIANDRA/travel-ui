import prisma from '@/lib/prisma';
import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

async function page() {
  const destinations = await prisma.destination.findMany();

  return (
    <Box
      sx={{m:2}}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Liste des destinations
      </Typography>
      <Stack direction="column" spacing={1}>
        {destinations.map((destination) => (
          <Paper
            key={destination.id}
            elevation={1}
            sx={{ p: 1.5, borderRadius: 2, fontWeight: 500 }}
          >
            {destination.name}
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default page