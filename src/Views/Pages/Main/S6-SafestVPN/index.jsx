import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Button, Typography, Grid, Divider } from '@mui/material';
import background from '../../../../assets/background.png';
import underline from '../../../../assets/underline.png';
import safestone from '../../../../assets/safestone.png';
import safesttwo from '../../../../assets/safesttwo.png';
import tickImage from '../../../../assets/tick..png'; 
import crossImage from '../../../../assets/cross.png'; 
import badgeImage from '../../../../assets/badge.png';

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Background = styled('img')`
  width: 100%;
  position: absolute;

  top: 0;
  left: 0;
  z-index: 1;
`;

const Content = styled(Box)`
  position: relative;
  z-index: 2; 
  text-align: center;
  padding: 60px 20px; 
`;

const TiltedButton = styled(Button)`
  background-color: #171717;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 35px;
  font-size: 16px;
  font-weight: 400;
  transform: rotate(-10deg);
  transition: all 0.3s ease;
  margin-bottom: 40px;
  margin-top: 20px;
  cursor: default;

  &:hover {
    background-color: #FF5B4A;
    transform: rotate(10deg);
  }

  @media (max-width: 768px) {
    margin-top: -40px; 
    padding: 8px 30px; 
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 30px; 
    padding: 10px 35px;
  }

  @media (min-width: 2560px) {
    margin-top: 70px; 
    padding: 16px 45px; 
  }
`;

const Card = styled(Box)`
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 65px;
  text-align: center;
  position: relative;
  height: 100%;
`;

const Badge = styled('img')`
  position: absolute;
  top: 30px;
  left: -14px;
  width: 100%;
  max-width: 120px; 
`;

const Icon = styled('img')`
  width: 100%;
  max-width: 160px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
   margin-top: 15px;
  }
`;

const List = styled('ul')`
  padding: 0;
  margin: 20px 0 0 0;
  text-align: left;
`;

const ListItem = styled('li')`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #171717;
`;

const ListIcon = styled(Box)`
  margin-right: 20px;
`;

const SafestVPN = () => {
  return (
    <Wrapper>
      {/* <Background src={background} alt="Background Image" /> */}
      <Container maxWidth='lg'>
        <Content>

            <TiltedButton>Compare</TiltedButton>
    
          <Typography variant="h2" sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' }, color: '#171717', marginBottom: '20px' }}>
            Who Is Safest
          </Typography>
          <Typography variant="h2" sx={{ color: '#171717', marginBottom: '20px', fontSize: { xs: '45px', sm: '55px', md: '61px' }, fontWeight: '600' }}>
            VPN or dVPN?
          </Typography>
          <img src={underline} alt="Your browser does not support the image tag" style={{ marginBottom: '30px' }} />
          <Typography 
            variant="body1" 
            sx={{ color: '#818181', fontSize: { xs: '14px', sm: '16px', md: '18px' }, maxWidth: '740px', margin: '0 auto', textAlign: 'center' }}>
            Traditional VPNs rely on centralized servers, while dVPNs offer decentralized, more secure, and censorship-resistant solutions.
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '40px' }}>
            <Grid item xs={12} md={6}>
              <Card>
                <Badge src={badgeImage} alt="Safest Badge" />
                <Icon src={safestone} alt="dVPN Icon" />
                <Typography variant="h2" sx={{ color: '#171717', fontSize: { xs: '16px', sm: '18px', md: '18px' }, marginBottom: '10px' }}>
                  Advantages
                </Typography>
                <Typography variant="h2" sx={{ color: '#171717', fontSize: { xs: '28px', sm: '32px', md: '32px' }, marginBottom: '50px', fontWeight: '600' }}>
                  dVPN
                </Typography>
                <List>
                  <ListItem>
                    <ListIcon><img src={tickImage} alt="Tick Icon" /></ListIcon>
                    <Typography variant="body1" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' }, color: '#818181', fontWeight: '400' }}>
                      No single entity controls the network, making it harder for attackers or governments to compromise it.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListIcon><img src={tickImage} alt="Tick Icon" /></ListIcon>
                    <Typography variant="body1" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' }, color: '#818181', fontWeight: '400' }}>
                      Users don’t need to trust a central entity; often, dVPNs use blockchain to enhance anonymity.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListIcon><img src={tickImage} alt="Tick Icon" /></ListIcon>
                    <Typography variant="body1" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' }, color: '#818181', fontWeight: '400' }}>
                      Distributed nodes make it harder to shut down or attack the network.
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <Icon src={safesttwo} alt="VPN Icon" />
                <Typography variant="h2" sx={{ color: '#171717', fontSize: { xs: '16px', sm: '18px', md: '18px' }, marginBottom: '10px' }}>
                  Disadvantages
                </Typography>
                <Typography variant="h2" sx={{ color: '#171717', fontSize: { xs: '28px', sm: '32px', md: '32px' }, marginBottom: '50px', fontWeight: '600' }}>
                  VPN
                </Typography>
                <List>
                  <ListItem>
                    <ListIcon><img src={crossImage} alt="Cross Icon" /></ListIcon>
                    <Typography variant="body1" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' }, color: '#818181', fontWeight: '400' }}>
                      Centralized servers can be a single point of failure or vulnerability.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListIcon><img src={crossImage} alt="Cross Icon" /></ListIcon>
                    <Typography variant="body1" sx={{ fontSize: { xs: '12px', sm: '14px', md: '14px' }, color: '#818181', fontWeight: '400' }}>
                      Trust is required in the VPN provider not to log or misuse user data.
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default SafestVPN;
