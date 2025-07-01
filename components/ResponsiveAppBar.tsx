"use client"
import { 
    AppBar, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    Menu, 
    MenuItem, 
    Toolbar, 
    Tooltip, 
    Typography 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React, { useState } from "react";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";

const pages = ['destination', 'offers', 'book-now'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const router = useRouter();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mad-reisen
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem onClick={
                  () => {
                    router.push("/destination");
                    handleCloseNavMenu()
                  }
                }>
                  <Typography sx={{ textAlign: 'center' }}>{t('destination')}</Typography>
                </MenuItem>
                <MenuItem onClick={
                  () => {
                    router.push("/offers");
                    handleCloseNavMenu()
                  }
                }>
                  <Typography sx={{ textAlign: 'center' }}>{t('offers')}</Typography>
                </MenuItem>
                <MenuItem onClick={
                  () => {
                    router.push("/book/new");
                    handleCloseNavMenu()
                  }
                }>
                  <Typography sx={{ textAlign: 'center' }}>{t('book-now')}</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mad-reisen
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={()=> router.push("/destination")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('destination')}
              </Button>
              <Button
                onClick={()=> router.push("/offers")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('offers')}
              </Button>
              <Button
                onClick={()=> router.push("/book/new")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('book-now')}
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t('open-settings')}>
              <IconButton 
                onClick={handleOpenUserMenu} 
                sx={
                  { 
                    backgroundColor: "#267BF1", 
                    color: "white"
                  }
                }
              >
                <Typography>{locale.toUpperCase()}</Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={() => changeLocale('de')}>
                  <Typography sx={{ textAlign: 'center' }}>🇩🇪</Typography>
                </MenuItem>
                <MenuItem onClick={() => changeLocale('en')}>
                  <Typography sx={{ textAlign: 'center' }}>🇬🇧</Typography>
                </MenuItem>
                <MenuItem onClick={() => changeLocale('fr')}>
                  <Typography sx={{ textAlign: 'center' }}>🇫🇷</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;