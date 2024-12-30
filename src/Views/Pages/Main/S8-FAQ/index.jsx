import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Divider, Grid, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Wrapper = styled(Box)`
  padding: 80px 0px;
`;

const FAQItem = styled(Box)`
  background-color: #E7ECF0;
  border-radius: 10px;
  margin: 15px 0;
  padding: 20px;
`;

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { question: 'What makes ExplorerVPN one of the best VPNs on the market?', answer: 'ExplorerVPN is the most advanced VPN service currently on the market. It has all the basic VPN features you’ve come to expect while also creating and adding new functionalities that no other company offers.' },
    { question: 'Why should I choose a paid VPN over a free VPN?', answer:" Paid VPNs like ExplorerVPN offer better security, speed, and privacy.  " },
    { question: 'Is it legal to use ExplorerVPN?', answer:" Yes, using ExplorerVPN is legal in most countries. Check in with your local authority to learn more." },
    { question: 'Does ExplorerVPN offer special deals?', answer:" Users can enjoy special discounts on various occasions. Stay posted on our channels to keep yourself up-to-date." },
    { question: 'Can I use ExplorerVPN while traveling abroad?', answer:" Yes, ExplorerVPN works globally and is very resistant to censorship efforts. " },
    { question: 'Which devices does ExplorerVPN support?', answer:" ExplorerVPN works across various mobile and desktop platforms." },
  ];

  const handleToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ color: '#171717', fontSize: { xs: '30px', sm: '35px', md: '45px' }, marginBottom: '10px' }} >
              Frequently
            </Typography>
            <Typography variant="h2" sx={{ color: '#171717', fontWeight: '600', fontSize: { xs: '28px', sm: '32px', md: '61px' }, marginBottom: '10px' }}>
              Asked Questions
            </Typography>
            <Divider sx={{ width: '300px',  margin: '20px auto', borderColor: '#FF5B4A',  borderBottomWidth: 3, marginBottom: '20px'  }} />
          </Grid>

          <Grid item xs={12} md={8}>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography  variant="h6" sx={{ fontWeight: '600', color: '#171717', fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>
                    {faq.question}
                  </Typography>
                  <IconButton onClick={() => handleToggle(index)}>
                    {openFAQ === index ? 
                      <ExpandLessIcon sx={{ color: '#171717', fontSize: '30px' }} /> : 
                      <ExpandMoreIcon sx={{ color: '#171717', fontSize: '30px' }} />}
                  </IconButton>
                </Box>
                {openFAQ === index && (
                  <Typography variant="body1"  sx={{ color: '#818181', marginTop: '10px', transition: 'opacity 0.3s ease-in-out', textAlign: 'left', fontSize: { xs: '14px', sm: '16px', md: '18px' }}}>
                    {faq.answer}
                  </Typography> )}</FAQItem> ))}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default FAQ;
