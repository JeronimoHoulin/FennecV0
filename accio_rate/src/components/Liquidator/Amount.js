import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'





export default function Amount() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} ml={4}>
                <div>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    </FormControl>
                </div>
                </Box>
            </Grid>
            <Grid item xs={6} mt={2}>
                <Button variant="contained" color="inherit">Deposit</Button>
            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>
                
            </Grid>
        </Grid>
  );
}
