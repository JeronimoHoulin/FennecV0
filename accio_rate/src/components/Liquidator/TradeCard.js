import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Amount from './Amount';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
}));


export default function TradeCard() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#595260', height: '80vh' }} >
            <Typography variant="h5" color="initial" align = "center">
                Stake your USDT for an APY 10%
            </Typography>
            <Amount />
        </ Box>
      </Container>
    </React.Fragment>
  );
}
