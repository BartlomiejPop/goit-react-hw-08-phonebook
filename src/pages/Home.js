import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import './fonts.css';

const defaultTheme = createTheme();

export default function SignInSide() {
  const boxShadowStyles = {
    WebkitBoxShadow: '8px 8px 24px -2px rgba(66, 68, 90, 1)',
    MozBoxShadow: '8px 8px 24px -2px rgba(66, 68, 90, 1)',
    boxShadow: '8px 8px 24px -2px rgba(66, 68, 90, 1)',
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{
            backgroundColor: `rgba(255, 255, 255, 1)`,
            backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 1) 0%, rgba(216, 216, 224, 1) 100%)`,
          }}
        >
          <Box
            sx={{
              my: 25,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              style={{ fontSize: '4rem', color: '#636367' }}
            >
              Phonebook
            </Typography>
            <Box
              sx={{
                mt: 1,
                display: 'flex',
                flexDirection: 'column',
                width: '75%',
              }}
            >
              <NavLink
                to="/login"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button
                  style={boxShadowStyles}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p: 2, fontSize: 18 }}
                >
                  Sign in
                </Button>
              </NavLink>
              <NavLink
                to="/register"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button
                  style={boxShadowStyles}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p: 2, fontSize: 18 }}
                >
                  Register
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
