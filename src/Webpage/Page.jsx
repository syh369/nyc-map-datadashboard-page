import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UIStack from '../Components/UIStack';
import TextMobileStepper from './Slider';
import { Paper } from '@mui/material';
//import './Page.css';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://digitaltwin.engineering.columbia.edu/">
        Urban Hybrid Twin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Page() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Urban Hybrid Twin
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              NYC Data Dashboard
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
                Data dashboard for viewing NYC related data. Use the map on the left to view
                or select a region. Specify date before geting data.
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <TextMobileStepper/>
            </Box>

            
          </Container>
        </Box>

        <Box  display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
        }}>
          {/* End hero unit */}
            {/* Replace this part with your Dashboard component */}
            <div className = 'mapDashboardShow mapDashboardHide'><UIStack/></div>
            <div className = 'notificationShow notificationHide'>
              <Box>
                  <Alert severity="warning">Please view the dashboard on PC</Alert>
              </Box>
            </div>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#1D4F91', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="#ffffff"
          component="p"
        >
          Credited to Urban Hybrid Twin From Columbia University
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}