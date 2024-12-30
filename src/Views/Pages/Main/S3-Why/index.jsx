import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import underline from '../../../../assets/underline.png';
import wallet from '../../../../assets/wallet.png'; 
import explore from '../../../../assets/explore.png';
import mobile from '../../../../assets/mobile.png';

const Wrapper = styled(Box)`
  padding: 80px 0px;
  background-color: #FFF8F5;
  position: relative; 
`;

const ButtonEx = styled(Button)`
  padding: 13px 20px;
  background-color: #FF5B4A;
  color: #ffffff;
  border-radius: 40px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;  
  
  &:hover {
    background-color: #FF5B4A;  
    transform: scale(1.1); 
  }
`;

const Wallet = styled('img')`
  width: 100%;
  max-width: 700px;
  @media (max-width: 600px) {
   padding-top: 15px;
  }
`;

const LineNav = styled(Box)`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px; 
  left: 50%;
  transform: translateX(-50%);
  gap: 20px; 
`;

const LineButton = styled(Button)`
  width: 35px;
  height: 5px;
  background-color: ${({ active }) => (active ? '#FF5B4A' : '#E2EAEE')};
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #FF5B4A;
  }
`;

const Why = () => {
  const [activeLine, setActiveLine] = useState(0);

  const handleLineChange = (lineNumber) => {
    setActiveLine(lineNumber);
  };

  const content = [
    {
      title: "Why Even Use a dVPN?",
      description: "Explorer VPN ensures unmatched privacy and security by eliminating central points of control. Enjoy true freedom.",
      image: wallet,
      buttonText: "Get Explorer VPN",
    },
    {
      title: "Why Even Use a dVPN?",
      description: "Explorer VPN ensures unmatched privacy and security by eliminating central points of control. Enjoy true freedom.",
      image: explore,
      buttonText: "Get Explorer VPN",
    },
    {
      title: "Why Even Use a dVPN?",
      description: "Explorer VPN ensures unmatched privacy and security by eliminating central points of control. Enjoy true freedom.",
      image: wallet,
      buttonText: "Get Explorer VPN",
    },
  ];

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography  variant="body1" sx={{ fontSize: { xs: '25px', sm: '30px', md: '45px' },  color: '#171717'  }}>
              Why
            </Typography>
            <Typography   variant="h2"  sx={{  fontWeight: 600, color: '#171717', maxWidth: '300px',  marginBottom: '30px', fontSize: { xs: '30px', sm: '45px', md: '61px' } }}>
              {content[activeLine].title}
            </Typography>
            <img src={underline} alt="Underline" style={{ marginBottom: '40px' }} />
            <Typography  variant="body1"  sx={{  color: '#171717',  maxWidth: '350px', marginBottom: '30px',  fontSize: { xs: '14px', sm: '16px', md: '18px' }  }}>
              {content[activeLine].description}
            </Typography>
            <ButtonEx>{content[activeLine].buttonText}</ButtonEx>
          </Grid>
          <Grid item xs={12} md={6}>
            <Wallet src={content[activeLine].image} alt="Content Image" />
          </Grid>
        </Grid>
      </Container>

      {/* <LineNav>
        {[0, 1, 2].map((lineNumber) => (
          <LineButton key={lineNumber} active={activeLine === lineNumber} onClick={() => handleLineChange(lineNumber)} />
        ))}
      </LineNav> */}
    </Wrapper>
  );
};

export default Why;
