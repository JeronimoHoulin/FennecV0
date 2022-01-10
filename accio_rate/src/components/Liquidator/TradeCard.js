import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Amount from './Amount';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../img/logoSwap.png';



const useStyles = makeStyles(() => ({

  Title: {
    fontFamily: "'Brush Script MT', cursive" ,
  },

  Img: {
    marginLeft: "10%",
    height: "50%",
    width: "80%",
  }
}));


export default function TradeCard() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#595260', height: '80vh' }} >
            <Typography variant="h5" color="initial" align = "center" className={classes.Title}>
                Welcome to Fennac Swap
            </Typography>
            <img src={Logo} className={classes.Img}/>
            <Amount />
        </ Box>
      </Container>
    </React.Fragment>
  );
}
