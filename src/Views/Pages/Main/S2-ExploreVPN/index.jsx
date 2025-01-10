import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import underline from '../../../../assets/underline.png';
import explore from '../../../../assets/explore.png';
import what from '../../../../assets/what.svg';

const Wrapper = styled(Box)`
  padding: 80px 0px;
`;

const ButtonEx = styled(Button)`
  padding: 15px 20px;
  background-color: #FF5B4A;
  color: #ffffff;
  border-radius: 40px;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #FF5B4A;
    transform: scale(1.1);
  }
`;

const TextWithImageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Exploreimg = styled('img')`
  width: 100%;
  max-width: 600px;
  @media (max-width: 600px) {
    padding-top: 15px;
  }
`;

const WhatImage = styled('img')`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-top: 50px;
  margin-right: 100px;


  @media (max-width: 600px) {
    display: none;
  }
`;

const Explore = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{fontSize: { xs: '14px', sm: '16px', md: '18px' },color: '#818181',marginBottom: '10px',}}>
              Save big on the world's leading VPN
            </Typography>
            <Box display="flex">
              <Typography variant="h2" sx={{fontWeight: 600,color: '#171717',maxWidth: '300px',marginBottom: '20px',fontSize: { xs: '35px', sm: '45px', md: '61px' },}}>
                What is VPN
              </Typography>
              <WhatImage src={what} alt="what" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography sx={{ mt: { xs: 2, sm: 5, md: 15 },fontSize: { xs: '16px', md: '19px' }, color:'#171717'}}>
            A VPN -<span style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
              "virtual private network",
            </span>{' '}
            is a secure tunnel between your device and the internet. VPNs protect you
            from snooping, interference, and censorship. As you connect to a secure VPN
            server, your internet traffic goes through an encrypted tunnel that nobody
            can see into-including hackers, governments, and your internet service
            provider.
          </Typography>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Explore;
