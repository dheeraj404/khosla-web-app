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

const PrivacyPolicy = () => {
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
          Privacy Policy
        </Typography>
        <Paragraph>
          We value the trust you place in Khoslaonline.com. That’s why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information-gathering and dissemination practices. Please Note: In order to provide our customers with the best possible services, our policies will be governed by this, and going further the privacy policy would be updated on a regular basis to reflect the same. We would request you please review this policy periodically, to be aware of any changes. By accepting the Privacy Policy during registration, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy.
        </Paragraph>
        <SectionHeader>
          Collection of Personally Identifiable Information
        </SectionHeader>
        <Paragraph>
          We collect personally identifiable information (email address, name, phone number, etc.) from you when you set up a free account with Khoslaonline.com. While you can browse some sections of our site without being a registered member, certain activities (such as placing an order) do require registration. You would be receiving offers and mailers from us, in case you do not wish to receive them, you can choose to unsubscribe from the same.
        </Paragraph>
        <SectionHeader>
          Use of Demographic and Profile Data
        </SectionHeader>
        <Paragraph>
          We use personal information to provide the services you request. The information given by you will be used to provide you with the services offered on our website. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect fees owed; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud, and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection. In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our user’s activity on our website. We identify and use your IP address to help diagnose problems with our server and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information. We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like zip code, age, or income level). We use this data to tailor your experience at our site, providing you with content that we think you might be interested in and to display content according to your preferences.
        </Paragraph>
        <SectionHeader>
          Cookies
        </SectionHeader>
        <Paragraph>
          A “cookie” is a small piece of information stored by a Web server on a Web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. Khoslaonline.com places both permanent and temporary cookies in your computer’s hard drive. Khoslaonline.com’s cookies do not contain any of your personally identifiable information.
        </Paragraph>
        <SectionHeader>
          Sharing of Personal Information
        </SectionHeader>
        <Paragraph>
          We may share personal information with our other corporate entities and affiliates to: help detect and prevent identity theft, fraud, and other potentially illegal acts; correlate related or multiple accounts to prevent abuse of our services; and to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity. Those entities and affiliates may not market to you as a result of such sharing unless you explicitly opt-in. We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal processes. We may disclose personal information to law enforcement offices, third-party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property, or personal safety of our users or the general public. Khoslaonline.com and its affiliates will share some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity. Should such a transaction occur that other business entities (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.
        </Paragraph>
        <SectionHeader>
          Security Precautions
        </SectionHeader>
        <Paragraph>
          Our site has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access. We will endeavor to safeguard the confidentiality of your personal information; transmissions made by means of the Internet cannot be made absolutely secure. By using this Site, you agree that we will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.
        </Paragraph>
        <SectionHeader>
          Links to Other Sites
        </SectionHeader>
        <Paragraph>
          Our site links to other websites that may collect personally identifiable information about you. Khoslaonline.com is not responsible for the privacy practices or the content of those linked websites.
        </Paragraph>
        <SectionHeader>
          Products & Accessories Confirmation
        </SectionHeader>
        <Paragraph>
          As a policy on receipt of the product, we request you to check and confirm the contents while accepting the delivery. Discrepancies, if any, must be brought to our notice, after which no further queries would be entertained. Kindly email us on khoslaonline@khoslaelectronics.com or alternatively call on +91 9511943020.
        </Paragraph>
        <SectionHeader>
          Warranty
        </SectionHeader>
        <Paragraph>
          For all products procured from https://www.khoslaonline.com, warranty and service are provided by the manufacturing companies through their authorized service providers in India.
        </Paragraph>
        <SectionHeader>
          Disclaimer
        </SectionHeader>
        <Paragraph>
          Khoslaonline.com makes every effort to present correct data and timely information regarding the products on sale on our website. However discrepancies, if any, may arise due to inaccurate/incomplete information given suppliers or external sources. In case you come across any such information termed inaccurate, we would request you to kindly inform us at khoslaonline@khoslaelectronics.com.
        </Paragraph>
        <SectionHeader>
          After Sales Service
        </SectionHeader>
        <Paragraph>
          We believe in providing our customer with the best and request you to kindly revert to us for any service related issues. The same would be followed up with the resp. manufacturing companies and we will ensure the service be made available to you as per the turnaround time wherever we are present.
        </Paragraph>
        <SectionHeader>
          Liability of Information
        </SectionHeader>
        <Paragraph>
          Khoslaonline.com nor any of its sources would be liable for any direct, special, incidental, indirect, or consequential damages whatsoever (including but not limited to: damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use of the information made available on this web site. Information on the Khoslaonline.com web site may not be reproduced, copied, or altered without the express written consent of Khoslaonline.com and its affiliates.
        </Paragraph>
        <SectionHeader>
          Disclaimers of Warranty and Product Liability
        </SectionHeader>
        <Paragraph>
          Khoslaonline.com will not be held liable for any damaged goods or injuries arising from the using the same. Warranties of products are provided by the Manufacturers and are liable for the same. Product information available on our website would be limited to the information given by the Manufacturer to us. Actual dimensions and colors may differ from the images shown on our website.
        </Paragraph>
        <SectionHeader>
          Termination
        </SectionHeader>
        <Paragraph>
          Khoslaonline.com may terminate this Agreement and these terms and conditions and/or the provision of any of the services at any time for any reason, including any improper use of this portal or your failure to comply with these terms and conditions. Such termination shall not affect any right to relief to which Khoslaonline.com and its third party providers and distributors may be entitled, at law or in equity. Upon termination of this User Agreement and these terms and conditions, all rights granted to you will terminate and revert to Khoslaonline.com and its third party providers, as applicable.
        </Paragraph>
        <SectionHeader>
          No Resale of Service
        </SectionHeader>
        <Paragraph>
          You agree not to reproduce, duplicate, copy, sell, resell or exploit for any commercial purposes, any portion of the Service, use of the Service, or access to the Service.
        </Paragraph>
      </Box>
    </Container>
  );
}

export default PrivacyPolicy;
