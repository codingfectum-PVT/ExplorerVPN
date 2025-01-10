import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import underlinetwo from '../../../../assets/underlinetwo.svg';
import wallet from '../../../../assets/wallet.png'; 
import explore from '../../../../assets/explore.png';
import card1 from '../../../../assets/card1.svg';
import card2 from '../../../../assets/card2.svg';
import card3 from '../../../../assets/card3.svg';

const Wrapper = styled(Box)`
  padding: 80px 0px;
  background-color: #FFF8F5;
  position: relative; 
  border-top: 5px solid #FF5B4A;

  @media (max-width: 768px) {
    padding: 60px 0px;
  }

  @media (max-width: 480px) {
    padding: 40px 0px;
  }
`;

const ButtonEx = styled(Button)`
  padding: 19px 40px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 40px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;  

  &:hover {
    background-color: #000000;  
    transform: scale(1.1); 
  }

  @media (max-width: 600px) {
    padding: 14px 30px;
  }
`;

const Wallet = styled('img')`
  width: 100%;
  max-width: 700px;
  margin-top: -120px; 
  position: relative;

  @media (max-width: 1200px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    margin-top: -100px;
  }

  @media (max-width: 600px) {
    max-width: 400px;
    margin-top: -80px;
  }
`;

const LineNav = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 70px; 

  @media (max-width: 600px) {
    margin-top: 50px;
  }
`;

const LineButton = styled('div')`
  width: 90px;
  height: 4px; 
  background-color: ${({ active }) => (active ? '#FF5B4A' : '#E2EAEE')};
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #FF5B4A;
  }

  @media (max-width: 600px) {
    width: 60px;
  }
`;

const Why = () => {
  const [activeLine, setActiveLine] = useState(0);

  const content = [
    {
      title: "Why Even Use a dVPN?",
      description: "Explorer VPN ensures unmatched privacy and security by eliminating central points of control. Enjoy true freedom.",
      image: card1,
      buttonText: "Get Explorer VPN",
    },
    {
      title: "Why Even Use a dVPN?",
      description: "Explorer VPN ensures unmatched privacy and security by eliminating central points of control. Enjoy true freedom.",
      image: card2,
      buttonText: "Get Explorer VPN",
    },
    {
      title: "Why Even Use a dVPN?",
      description: "Explorer VPN ensures unmatched privacy and security by eliminating central points of control. Enjoy true freedom.",
      image: card3,
      buttonText: "Get Explorer VPN",
    },
  ];

  const handleLineChange = (lineNumber) => {
    setActiveLine(lineNumber);
  };



  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container spacing={4}> 
          <Grid item xs={12} md={6.5}>
            <Wallet src={content[activeLine].image} alt="Content Image" />
            <LineNav>
              {[0, 1, 2].map((lineNumber) => (
                <LineButton key={lineNumber} active={activeLine === lineNumber} onClick={() => handleLineChange(lineNumber)} />
              ))}
            </LineNav>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography  variant="body1"  sx={{ fontSize: { xs: '25px', sm: '30px', md: '45px' }, color: '#171717' }}>
              Why
            </Typography>
            <Typography  variant="h2"  sx={{ fontWeight: 600, color: '#171717', marginBottom: '25px', fontSize: { xs: '30px', sm: '45px', md: '65px' } }}>
              Explorer VPN
            </Typography>
            <img  src={underlinetwo} alt="Underline"  style={{ marginBottom: '40px', marginLeft: '15px' }} />
            <Typography  variant="body1" sx={{ color: '#171717', maxWidth: '460px', marginBottom: '30px', fontSize: { xs: '14px', sm: '16px', md: '18px' }, letterSpacing: '0.80px' }}>
              {content[activeLine].description}
            </Typography>
            <ButtonEx>{content[activeLine].buttonText}</ButtonEx>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Why;
