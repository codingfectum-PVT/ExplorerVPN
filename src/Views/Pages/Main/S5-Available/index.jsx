import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import underline2 from '../../../../assets/underline2.png';
import windows from '../../../../assets/windows.svg';
import android from '../../../../assets/android.png';
import ios from '../../../../assets/ios.svg';
import google from '../../../../assets/google.svg';
import firefox from '../../../../assets/firefox.svg';
import edge from '../../../../assets/edge.svg';
import mobile from '../../../../assets/mobile.png';
import windowsred from '../../../../assets/windowred.png';
import androidred from '../../../../assets/androidred.png';
import applered from '../../../../assets/applered.png';

const Wrapper = styled(Box)`
  padding: 80px 0px;
`;

const ImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const IconImage = styled('img')`
  transition: transform 0.3s ease, opacity 0.3s ease;
  &:hover {
    transform: scale(1.1); 
  }
  @media (max-width: 600px) {
    margin-left: 10px; 
  }
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin-left: -25px;
  @media (max-width: 600px) {
    margin-left: 0; 
    margin-top: 10px; 
    align-items: center; 
  }
`;

const StyledButton = styled(Button)`
  background-color: #FF5B4A !important;
  color: #fff !important;
  border-radius: 20px !important;
  min-width: 160px !important;
  padding: 5px 10px !important;
  &:hover {
    background-color: #FF5B4A !important;
  }
`;

const ComingSoonButton = styled(Button)`
  background-color: #f2f2f2 !important;
  color: #999 !important;
  border: 1px dashed #999 !important;
  font-style: italic !important;
  cursor: default !important;
  min-width: 170px !important;
  border-radius: 20px !important;
  padding: 5px 5px !important;
`;

const Mobile = styled('img')`
  width: 100%;
  max-width: 500px;
`;

const Available = () => {
  const [activePlatform, setActivePlatform] = useState(null);

  const platforms = [
    {
      id: 'windows',
      img: windows,
      imgActive: windowsred,
      title: 'Windows',
      buttons: ['Windows 32-bit', 'Windows 64-bit'],
    },
    {
      id: 'android',
      img: android,
      imgActive: androidred,
      title: 'Android',
      buttons: ['Android (Premium)'],
    },
    {
      id: 'ios',
      img: ios,
      imgActive: applered,
      title: 'iOS',
      buttons: ['iOS (Premium)'],
    },
    { id: 'chrome', img: google, title: 'Chrome' },
    { id: 'firefox', img: firefox, title: 'Firefox' },
    { id: 'edge', img: edge, title: 'Edge' },
  ];

  const handleClick = (id) => {
    setActivePlatform(activePlatform === id ? null : id);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.icon-wrapper') && !e.target.closest('.button-wrapper')) {
        setActivePlatform(null); 
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [activePlatform]);

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <Typography variant="h2" sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' }, color: '#171717' }}>
                Available
              </Typography>
              <img src={underline2} alt="Underline" style={{ width: '100%', maxWidth: '100px', marginLeft: '20px' }} />
            </ImageContainer>
            <Typography variant="h2" sx={{ fontSize: { xs: '45px', sm: '55px', md: '61px' }, fontWeight: '600', marginBottom: '30px' }}>
              For All Devices
            </Typography>
            <Typography variant="body1" sx={{ color: '#818181', fontSize: { xs: '14px', sm: '16px', md: '18px' }, maxWidth: '460px', marginBottom: '60px' }}>
              Use seamlessly across Mobile, desktop, and more. Enjoy secure and fast connections on any device, anytime, anywhere.
            </Typography>

            <Grid container>
              {platforms.map((platform) => (
                <Grid item xs={6} sm={4} key={platform.id}>
                  <ImageContainer>
                    <IconWrapper
                      className="icon-wrapper"
                      onClick={platform.buttons ? () => handleClick(platform.id) : undefined} 
                    >
                      <IconImage
                        src={activePlatform === platform.id ? platform.imgActive : platform.img}
                        alt={platform.title}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#171717',
                          fontSize: { xs: '14px', sm: '16px', md: '16px' },
                          fontWeight: '600',
                        }}
                      >
                        {platform.title}
                      </Typography>
                    </IconWrapper>
                  </ImageContainer>
                  {activePlatform === platform.id && platform.buttons && (
                    <ButtonWrapper className="button-wrapper">
                      {platform.buttons.map((buttonText, index) =>
                        buttonText === 'Coming Soon' ? (
                          <ComingSoonButton key={index} disabled>
                            {buttonText}
                          </ComingSoonButton>
                        ) : (
                          <a href="#" key={index} style={{ textDecoration: 'none' }}>
                            <StyledButton>{buttonText}</StyledButton>
                          </a>
                        )
                      )}
                    </ButtonWrapper>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Mobile src={mobile} alt="Mobile" />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Available;
