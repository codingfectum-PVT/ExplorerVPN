import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import LockerMenu from '../../../Components/LockerMenu';
import clock from '../../../../assets/clock.svg';
import headmob from '../../../../assets/headmob.svg';
import back from '../../../../assets/back.svg';
import mobile from '../../../../assets/mobile.svg';
import underlinetwo from '../../../../assets/underlinetwo.svg';

const Wrapper = styled(Box)`
  padding-top: 240px;
  @media (max-width: 768px) {
    padding-top: 170px;
  }
`;

const TopBox = styled(Box)`
  background: linear-gradient(180deg, #C2DDEA -16%, #FFFFFF 180%);
`;

const LockerMenuContainer = styled(Box)`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const ButtonEx = styled(Button)`
  padding: 17px 40px;
  background-color: #ff5b4a;
  color: #ffffff;
  border-radius: 40px;
  margin-right: 30px;
  transition: transform 0.3s ease;
 
  &:hover {
    background-color: #ff5b4a;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 17px 40px;
    margin-right: 20px;
  }
`;

const Mobile = styled('img')`
  position: absolute;
  width: 100%; 
  max-width: 350px; 
  height: auto; 
  z-index: 5;

  @media (min-width: 1200px) {
    max-width: 450px; 
  }

  @media (min-width: 1600px) {
    max-width: 450px; 
  }

  @media (min-width: 2560px) {
    top: 14%;
  }
  @media (max-width: 768px) {
    display: none; 
  }
`;


const UnderlineImage = styled('img')`
  position: absolute;
  bottom: 20px;
  left: 220px;
  width: 100%;
  max-width: 200px;
  height: auto;

  @media (max-width: 600px) {
    max-width: 130px;
    left: 170px;
  }
`;

const FeaturedSection = styled(Box)`
  background-color: #171717;
  padding: 27px 0;
  position: relative;
  color: #ffffff;
  margin-top: 60px;
  padding-top: 30px;
  transform: rotate(-1deg);
  transform-origin: right;
  overflow: hidden;
  width: 100%;
  max-width: 1515px;  

 
  @media (min-width: 1540px) {
    max-width: 100%;  
  }    

  @media (max-width: 768px) {
    margin-top: 80px;
    padding-top: 27px;
    transform: rotate(0deg);
  }
`;


const FeaturedText = styled(Typography)`
  margin: 0 20px;
  font-size: 20px;
  font-weight: 900;
  position: relative;
  padding-right: 10px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 5px;
    padding-right: 5px;
    &:not(:last-child)::after {
      right: -5px;
      height: 50%;
    }
  }

  &.yahoo {
    span:last-child {
      display: inline-block;
      transform: rotate(10deg); 
      margin-left: 2px;
    }
  }
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Header = () => {
  return (
    <TopBox>
      <LockerMenuContainer>
        <LockerMenu />
      </LockerMenuContainer>
      <Wrapper>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={7.2}>
              <Box>
                <Box display="flex" mb={3}>
                  <img src={clock} alt="clock" style={{maxWidth: '24px',height: 'auto',marginRight: '10px',}}/>
                  <Typography variant="h6"component="p"fontSize="18px"sx={{fontSize: { xs: '17px', sm: '17px', md: '18px' },}}>
                    Save big on the world's leading VPN
                  </Typography>
                </Box>
                <Box position="relative" display="inline-block" mb={3}>
                  <Typography variant="h3" fontWeight='bold' fontSize="48px" sx={{fontSize: { md: '61px' }, maxWidth: { md: '450px' },}}>
                    VPN for Safety and Freedom Online
                  </Typography>
                  <UnderlineImage src={underlinetwo} alt="underline" />
                </Box>
                <Typography variant="body1" maxWidth="550px" mb={5}fontSize="17px">
                  Explorer VPN offers lightning-fast connections and
                  cutting-edge encryption for ultimate online privacy. Enjoy
                  secure, seamless browsing without compromising speed.
                </Typography>
                <ButtonWrapper>
                  <ButtonEx>Get Explorer VPN</ButtonEx>
                  <Box display="flex"  mr={2}>
                    <img src={headmob} alt="headmob" style={{width: '100%',maxWidth: '50px',height: 'auto',}}/>
                    <Typography color="#000000" maxWidth="150px"textTransform="none" marginTop='7px'marginLeft='10px' >
                      Compatible with your iPhone
                    </Typography>
                  </Box>
                  
                  <Box display="flex">
                    <img src={back} alt="back" style={{width: '100%', maxWidth: '50px',height: 'auto',}}/>
                    <Typography color="#000000"maxWidth="150px"textTransform="none"  marginTop='7px'marginLeft='10px' >
                      30-day money back guarantee
                    </Typography>
                  </Box>
                </ButtonWrapper>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.8}>
              <Mobile src={mobile} alt="mobile" />
            </Grid>
          </Grid>
        </Container>
      </Wrapper>

      <FeaturedSection>
        <Container maxWidth="lg">
          <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
            <Typography variant="h6" mr={1} fontSize="18px">
              Featured in
            </Typography>
            <FeaturedText className="yahoo">
              yahoo<span>!</span>
            </FeaturedText>
            <FeaturedText>techradar.</FeaturedText>
            <FeaturedText>Bloomberg</FeaturedText>
            <FeaturedText>CoinDesk</FeaturedText>
          </Box>
        </Container>
      </FeaturedSection>
    </TopBox>
  );
};

export default Header;
