import React from 'react';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';


const SectionHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 400,
  fontSize: '1.5rem',
  fontFamily: 'Montserrat, Arial, sans-serif',
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
  fontSize: '1rem',
  fontFamily: 'Montserrat, Arial, sans-serif',
}));

const PaymentReturnPolicies = () => {
  return (
    <Container maxWidth={false} style={{ padding: '2rem', maxWidth: '90%', margin: '0 auto', fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <CssBaseline />
      <Box sx={{ my: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          style={{ textAlign: 'center', fontWeight: '700', marginBottom: '2rem' }}
        >
          Payment & Return Policies
        </Typography>
        <Paragraph>
          Khoslaonline.com (Khosla Electronics Pvt Ltd) thank you and values your purchase with us. This section describes Khoslaonline.com’s policies on payments received from customers and returns to customers for products or services ordered.
        </Paragraph>
        <SectionHeader>
          Acceptable Methods of Payment
        </SectionHeader>
        <Paragraph>
          Presently payment methods available with Khoslaonline.com are through Credit Cards, Debit Cards, EMI Card, Wallet and Net banking only. As and when other methods will be incorporated, the same would be updated here as well. Your Credit/Debit card information remains private and confidential. Khoslaonline.com and our secure online payment gateways use Secure Sockets Layer security technology to protect your Card information. We accept all Cards– only Indian cards, as International cards would not be supported. You will have to enter your 16 digit Credit/Debit card number and the 3 digit CVV (Card Verification Value) code which is at the back of your card and complete the payment.
        </Paragraph>
        <SectionHeader>
          Cash On Delivery (C.O.D.)
        </SectionHeader>
        <Paragraph>
          Is available in West Bengal for a maximum of Rs. 50,000 /- per transaction. Our customer has to pay the complete booked amount prior to delivery, to be collected by authorized Khosla Electronics collection personnel. The official receipt for cash collected will be provided to the customer by authorized Khosla Electronics collection personnel.
        </Paragraph>
        <SectionHeader>
          Verified By VISA (VBV) and MasterCard Secure Code
        </SectionHeader>
        <Paragraph>
          With a view of making Online shopping safer, the Reserve Bank of India has made it mandatory for all transactions to have an extra level of authentication. The “extra level” is a password which you will have to enter after entering your Credit Card/ Debit Card details while making an online payment. This technology is called Verified by VISA (VBV) or MSC (MasterCard Secure Code). You will have to log onto your banks website for registration and each bank has its own process for registration.
        </Paragraph>
        <SectionHeader>
          Orders
        </SectionHeader>
        <Paragraph>
          After placing your valued order and making the payment, we would not be able to make any changes in the same. Also combining or adding orders once they have been placed would not be possible. Post shipment of your products, orders cannot be cancelled at all. In the event of a non-delivery occurring due your mistake (wrong name, address or any other wrong information), Khoslaonline.com would incur an extra cost for redelivery and the same would be claimed from you.
        </Paragraph>
        <Paragraph>
          Any order placed for a product that is listed at an incorrect price may be cancelled. This shall be regardless of whether the order has been confirmed and/or payment levied. In the event the payment has been processed, the same shall be credited to your account and duly notified to you by email.
        </Paragraph>
        <SectionHeader>
          Pricing
        </SectionHeader>
        <Paragraph>
          All offer prices on Khoslaonline.com are all inclusive; there are no hidden charges whatsoever. You have to only pay the offer price that you see on our product page next to the specific product image.
        </Paragraph>
        <SectionHeader>
          Delivery
        </SectionHeader>
        <Paragraph>
          Khoslaonline.com provides FREE Delivery for all products sold on https://www.khoslaonline.com to your beneficiary address in West Bengal (Limited to selected cities limits only). Kindly check Pin Code for Delivery Serviceable Area. There are no hidden charges applicable. Delivery time would be minimum 4 business days from the day your order booking and payment is completed on https://www.khoslaonline.com. May delay in the delivery is due to stock unavailability or some technical issues that will not be considered in the shipment date/days. The day of booking your order is taken as day 0.
        </Paragraph>
        <SectionHeader>
          Demonstration & Installation
        </SectionHeader>
        <Paragraph>
          Demonstration is provided by the manufacturing company and is provided on certain products only, in case of further clarifications, we would request to contact us on +91 9511943020 or email us on khoslaonline@khoslaelectronics.com and we will be happy to clarify on the same. After delivery/receipt of product, the demonstration, if applicable, would happen after minimum 4 business days. Only the first demonstration would be on a complimentary basis.
        </Paragraph>
        <Paragraph>
          Installation is provided by the manufacturing company’s authorized service center/franchisee only. For Split A/C, standard installation charges will apply; payable by the consumer directly to the company’s authorized service center/franchisee.
        </Paragraph>
        <Paragraph>
          Inclusions in scope of work for Split A/c installation: – Installation of Indoor and Outdoor units, Interconnecting Indoor and Outdoor unit with piping.
        </Paragraph>
        <Paragraph>
          Exclusions in scope of work for Split A/c Installation:– All masonry work, Supply and Installation of main power phase, electrical work, Leak testing if piping is already done by the consumer, no drilling holes in any of the pillars, dismantling charges if earlier Split A/c is present.
        </Paragraph>
        <Paragraph>
          For other products, standard installation will be provided as per companies norms and is complimentary. After delivery/receipt of product, the installation would happen after minimum 4 business days. We would request you to kindly contact us on the above mentioned contact details for any assistance required.
        </Paragraph>
        <SectionHeader>
          Returns and Refunds
        </SectionHeader>
        <Paragraph>
          Khoslaonline.com makes every effort to service the orders placed with them, as per the specification and delivery timelines mentioned against each product. As a policy, we request you to kindly check the product and the accessories while accepting the delivery. In case of any discrepancies, kindly bring it to our notice before accepting delivery by calling us on +91 9511943020 or email us on khoslaonline@khoslaelectronics.com. After acceptance of delivery of the product, Khoslaonline.com will not entertain any returns or refund request.
        </Paragraph>
        <Paragraph>
          Contact us for the replacement if and only the product has manufacturing defect and the defects has been confirmed by the authorized installer of the respective manufacturing companies. Otherwise khoslaonline.com & Khosla Electronics Pvt Ltd is not liable to make the replacement. If the replacement model is not available with khoslaonline.com then khoslaonline.com process the refund once the pickup has been completed from khoslaonline.com side. There will be no return of the product once the order has been placed by the customer.
        </Paragraph>
        <Paragraph>
          In case, the payment mode of the order is Online (Credit/Debit Card OR Net Banking) and if customer will be cancelled/returned his/her order, customer has to sent cancelation request via email within 2 days from the date of order placed, then 5% of the order amount will be deducted from the refunding amount. Refund will be done within 10-15 working days.
        </Paragraph>
      </Box>
    </Container>
  );
}

export default PaymentReturnPolicies;
