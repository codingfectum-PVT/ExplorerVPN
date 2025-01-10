import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import windows from '../../../../assets/windows.svg';
import macos from '../../../../assets/macos.svg';
import linux from '../../../../assets/linux.svg';
import android from '../../../../assets/android.svg';
import chrome from '../../../../assets/chrome.svg';
import firefox from '../../../../assets/firefox.svg';
import edge from '../../../../assets/edge.svg';
import androidtv from '../../../../assets/androidtv.svg';
import tvos from '../../../../assets/tvos.svg';
import buttonsec from '../../../../assets/buttonsec.svg';
import edgehov from '../../../../assets/edgehov.svg';
import firefoxhov from '../../../../assets/firefoxhov.svg';
import androidhov from '../../../../assets/androidhov.svg';
import chromehov from '../../../../assets/chromehov.svg';
import tvoshov from '../../../../assets/tvoshov.svg';
import windowshov from '../../../../assets/windowshov.svg';
import linuxhov from '../../../../assets/linuxhov.svg';
import androidtvvhov from '../../../../assets/androidtvvhov.svg';
import machov from '../../../../assets/machov.svg';

const Wrapper = styled(Box)`
  padding: 80px 0px;
  background: linear-gradient(180deg, #171717 -15%, #79514d 180%);
  position: relative; 
`;

const ButtonSecImage = styled('img')`
  position: absolute;
  top: 10px; 
  left: 65%;
  width: 140px; 
  height: auto;
  @media (max-width: 600px) {
    width: 100px; 
    top: 10px; 
  }
`;

const ImageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  @media (max-width: 600px) {
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
  width: 100px;
  margin-bottom: 20px;
  height: auto;
  transition: transform 0.3s ease, opacity 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    margin-left: 10px;
    width: 80px;
  }
`;

const CenterText = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Available = () => {
  const [activePlatform, setActivePlatform] = useState(null);

  const platforms = [
    {
      id: 'windows',
      img: windows,
      hoverImg: windowshov,
      title: 'Windows',
      buttons: ['Windows 32-bit', 'Windows 64-bit'],
    },
    {
      id: 'macos',
      img: macos,
      hoverImg: machov,
      title: 'macOS',
      buttons: ['macOS (Premium)'],
    },
    {
      id: 'linux',
      img: linux,
      hoverImg: linuxhov,
      title: 'Linux',
      buttons: ['Linux (Premium)'],
    },
    {
      id: 'android',
      img: android,
      hoverImg: androidhov,
      title: 'Android',
      buttons: ['Android (Premium)'],
    },
    { id: 'chrome', img: chrome, hoverImg: chromehov, title: 'Chrome', buttons: ['Install Chrome'] },
    { id: 'firefox', img: firefox, hoverImg: firefoxhov, title: 'Firefox', buttons: ['Install Firefox'] },
    { id: 'edge', img: edge, hoverImg: edgehov, title: 'Edge', buttons: ['Install Edge'] },
    { id: 'androidtv', img: androidtv, hoverImg: androidtvvhov, title: 'AndroidTV', buttons: ['Install AndroidTV App'] },
    { id: 'tvos', img: tvos, hoverImg: tvoshov, title: 'tvOS', buttons: ['Install tvOS App'] },
  ];

  const handleClick = (id) => {
    setActivePlatform(activePlatform === id ? null : id);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.icon-wrapper')) {
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
      <ButtonSecImage src={buttonsec} alt="Button Section Image" />
      <Container maxWidth="xl">
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item xs={12} md={9}>
            <Typography variant="h2" mb={2} sx={{ fontSize: { xs: '30px', sm: '35px', md: '45px' }, color: '#FFFFFF' }}>
              Available
            </Typography>
            <Typography variant="h2" mb={2} sx={{ fontSize: { xs: '45px', sm: '55px', md: '61px' }, fontWeight: '600', color: '#FFFFFF' }}>
              For All Devices
            </Typography>
            <CenterText>
              <Typography variant="body1" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '16px', md: '18px' }, marginBottom: '80px', maxWidth: '450px' }}>
                Download ExplorerVPN today and connect to unlimited devices with one subscription.
              </Typography>
            </CenterText>

            <Grid container spacing={3} justifyContent="center" mb={4}>
              {platforms.slice(0, 5).map((platform) => (
                <Grid item xs={6} sm={3} md={2} key={platform.id}>
                  <ImageContainer>
                    <IconWrapper className="icon-wrapper" onClick={() => handleClick(platform.id)}>
                      <IconImage src={activePlatform === platform.id ? platform.hoverImg : platform.img} alt={platform.title} />
                      <Typography variant="body1" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '16px', md: '16px' } }}>
                        {platform.title}
                      </Typography>
                    </IconWrapper>
                    {activePlatform === platform.id && platform.buttons && (
                      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
                        {platform.buttons.map((button, index) => (
                          <Button key={index} variant="contained"sx={{marginBottom: '10px',backgroundColor: '#FFFFFF', color: '#000000', padding:'13px 15px',borderRadius: '30px', 
                              '&:hover': {backgroundColor: '#79514d',color: '#FFFFFF', },}}>
                            {button}
                          </Button>
                        ))}
                      </Box>
                    )}
                  </ImageContainer>
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3} justifyContent="center">
              {platforms.slice(5).map((platform) => (
                <Grid item xs={6} sm={3} md={2} key={platform.id}>
                  <ImageContainer>
                    <IconWrapper className="icon-wrapper" onClick={() => handleClick(platform.id)}>
                      <IconImage src={activePlatform === platform.id ? platform.hoverImg : platform.img} alt={platform.title} />
                      <Typography variant="body1" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '16px', md: '16px' } }}>
                        {platform.title}
                      </Typography>
                    </IconWrapper>
                    {activePlatform === platform.id && platform.buttons && (
                      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
                        {platform.buttons.map((button, index) => (
                          <Button key={index} variant="contained" sx={{marginBottom: '10px',backgroundColor: '#FFFFFF', color: '#000000', padding:'13px 15px',borderRadius: '30px',
                              '&:hover': {backgroundColor: '#79514d',color: '#FFFFFF', },}}>
                            {button}
                          </Button>
                        ))}
                      </Box>
                    )}
                  </ImageContainer>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Available;
