import prisma from '@/lib/prisma'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

async function page() {
  const offers = await prisma.offer.findMany();
  return (
    <>
      <Stack direction="column" spacing={4} sx={{m:2}}>
        {offers.map((offer) => (
          <Box key={offer.id} sx={{ border: '1px solid #ccc', borderRadius: 2, p: 3 }}>
            <Typography variant="h6" fontWeight="bold">{offer.name}</Typography>
            <Typography variant="body2" mt={1}>
              {offer.description}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" color="text.secondary">
              Ab {offer.dailyPrice} USDT pro Tag
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  )
}

export default page