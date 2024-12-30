import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import logo from '../../../../assets/logo.svg';
import playstore from '../../../../assets/playstore.png';
import tg from '../../../../assets/tg.svg';
import insta from '../../../../assets/insta.svg';
import discord from '../../../../assets/discord.svg';
import hand from '../../../../assets/hand.svg';
import tweet from '../../../../assets/tweet.svg';

const Wrapper = styled(Box)`
  padding: 40px 0px;
  background-color: #171717;
  border-top: 5px solid #FF5B4A;
  color: #ffffff;
`;

const Logo = styled('img')`
width: auto;
height: auto;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #454649;
  color: #ffffff;
  text-transform: none;
  padding: 15px 25px;
  border-radius: 40px;
  &:hover {
    background-color: #e14a3d;
  }
  @media (max-width: 1025px) {
padding: 10px 20px;
font-size: 11px;
  }
`;

const PlaystoreButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #454649;
  color: #ffffff;
  text-transform: none;
  
  padding: 15px 25px;
  border-radius: 40px;
  margin-right: 10px;
  text-decoration: none;
  &:hover {
    background-color: #e14a3d;
  }

  @media (max-width: 1025px) {
padding: 10px 20px;
font-size: 11px;
  
  }
`;

const PlaystoreIcon = styled('img')`
  width: 20px;
  margin-right: 10px;
`;

const Link = styled(Typography)`
  color: #ffffff;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: #FF5B4A; 
  }

`;

const SectionTitle = styled(Typography)`
  color: #ffffff;
  margin-bottom: 20px;
  position: relative;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    height: 3px;
    background: #FF5B4A;
    width: 20%;
    left: 0;
    bottom: -5px; 
  }
 
`;

const SocialIcon = styled('img')`
 width: 100%;
 max-width: 30px;
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-left: 10px; 
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Logo src={logo} alt="logo" />
            <Typography variant="body2" sx={{ color: '#ffffff', maxWidth: '300px', marginBottom: '20px' }} >
              Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app.
            </Typography>
            <Box display="flex">
            <a href="#" style={{ textDecoration: 'none' }}>
              <PlaystoreButton>
                <PlaystoreIcon src={playstore} alt="playstore" />
                Get it on Google Play
              </PlaystoreButton>
              </a>
              <StyledButton>Direct Download</StyledButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <SectionTitle>Quick Links</SectionTitle>
            <Link>All Time Rankings</Link>
            <Link>Daily Ranking</Link>
            <Link>New Listings</Link>
            <Link>Submit Coin</Link>
            <Link>Update Request</Link>
          </Grid>

          <Grid item xs={12} md={2}>
            <SectionTitle>Legal</SectionTitle>
            <Link>Official Verification</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Cookies Policy</Link>
          </Grid>

          <Grid item xs={12} md={2}>
            <SectionTitle>Quick Links</SectionTitle>
            <Link >Contact Us</Link>
            <Link>Services</Link>
            <Link>Advertise</Link>
            <Link>Blog</Link>
          </Grid>
        </Grid>

        <Box mt={4} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #454649', paddingTop: '35px' }}>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>
            Copyright © 2024, All Rights Reserved
          </Typography>
          <Box display="flex" alignItems="center">
            <a href='#'>
              <SocialIcon src={insta} alt="instagram" />
            </a>
            <a href='#'>
              <SocialIcon src={tweet} alt="twitter" />
            </a>
            <a href='#'>
              <SocialIcon src={hand} alt="hand" />
            </a>
            <a href='#'>
              <SocialIcon src={tg} alt="telegram" />
            </a>
            <a href='#'>
              <SocialIcon src={discord} alt="discord" />
            </a>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Footer;
