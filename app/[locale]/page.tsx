'use client'
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const t = useI18n()
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()
  const router = useRouter()
  return (
    <>
      <Box
        component="section"
        sx={{
          width: '100%',
          height: { xs: '100vh', md: '100vh' },
          background: 'linear-gradient(to bottom, #0077b6, #ffffff)',
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
            {t("title")}
          </Typography>
          <Typography variant="h6">
            {t("subtitle")}
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push("/book/new")}
            sx={{
              mt: 2,
              backgroundColor: "#267BF1", // orange chaud
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "1rem",
              '&:hover': {
                backgroundColor: "#267BF1", // orange plus foncé au hover
              },
            }}
          >
            {t("hero-button")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
