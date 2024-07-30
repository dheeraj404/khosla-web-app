import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // fontFamily: 'Monstrant'
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:600px)': {
            maxWidth: '80%',
          },
        },
      },
    },
  },
});

const ShippingOptions = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{fontFamily:'Arial'}}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom style={{display:'flex',justifyContent:'center',marginBottom:'1rem',fontWeight:'400'}}>
            Shipping Options
          </Typography>
          <Typography variant="body1" paragraph>
            Khoslaonline.com thanks you for your patronage and values your purchases with us. Given below are the details for shipping/delivery of the products sold on https://www.khoslaonline.com for your kind reference.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Shipping/Delivery Area
          </Typography>
          <Typography variant="body1" paragraph>
            Currently, delivery of products purchased on https://www.khoslaonline.com is available in West Bengal limits only. As and when we would provide delivery to other locations, the same would be updated here, we request you to kindly check the Shipping Options for further updates.
          </Typography>
          <Typography variant="body1" paragraph>
            Khoslaonline.com provides FREE shipping/delivery to your beneficiary address, we request you to place your valued order and enjoy the FREE shipping/delivery offer. Your order will be delivered as per the stipulated delivery time (please refer to Payment and Returns Policies). We believe in providing our dear customers with the best service and hence do not charge for delivery, however, we reserve the right to change/discontinue the FREE Shipping/Delivery at any time.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Cancellation of Shipment
          </Typography>
          <Typography variant="body1" paragraph>
            After order confirmation and payment completion, Khoslaonline.com will endeavor to deliver your product in the stipulated delivery time to your beneficiary address in West Bengal limits only. Khoslaonline.com will not allow for Cancellation of Shipment for any reason and request our dear customers accordingly to confirm the purchase first and then book with https://www.khoslaonline.com.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ShippingOptions;
