'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import cover from '../../images/lemurien.jpeg'
import { Box, Typography } from "@mui/material";

export default function Home() {
  const t = useI18n()
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()
  return (
    <>
      <Box
        component="section"
        sx={{
          width: '100%',
          height: { xs: '100vh', md: '100vh' },
          backgroundImage: `url(${cover.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Découvrez Madagascar autrement
          </Typography>
          <Typography variant="h6">
            Explorez les merveilles naturelles du pays rouge
          </Typography>
        </Box>
      </Box>
    </>
  );
}
