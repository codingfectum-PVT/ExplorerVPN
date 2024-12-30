import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Divider, Card, Button } from '@mui/material';
import slider1 from '../../../../assets/slider1.png';
import slider2 from '../../../../assets/slider2.png';
import slider3 from '../../../../assets/slider3.png';

const Wrapper = styled(Box)`
  padding: 80px 0px;
`;

const Cardone = styled(Card)`
  background-color: #E2EAEE;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  margin-top: 40px;
  @media (max-width: 600px) {
    margin: 20px auto;
  }
`;

const Cardimg = styled('img')`
  width: 100%;
  max-width: 500px;
  margin-bottom: 15px;
`;

const LineNav = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
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

const CardContainer = styled(Grid)`
  display: flex;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ fade }) => (fade ? 0 : 1)};
  transform: ${({ fade }) => (fade ? 'translateY(10px)' : 'translateY(0)')};
`;

const Whyneed = () => {
  const [activeLine, setActiveLine] = useState(0);
  const [fade, setFade] = useState(false);

  const handleLineChange = (lineNumber) => {
    setFade(true);
    setTimeout(() => {
      setActiveLine(lineNumber); 
      setFade(false);
    }, 500); 
  };

  const cardsData = [
    [
      { img: slider1, title: 'No Logs', description: 'because of decentralisation' },
      { img: slider2, title: 'Decentralised VPN', description: 'Not traditional' },
      { img: slider3, title: 'Advanced Encryption', description: 'because of decentralisation' }
    ],
    [
      { img: slider1, title: 'No Logs', description: 'because of decentralisation' },
      { img: slider3, title: 'Advanced Encryption', description: 'For secure communication' },
      { img: slider2, title: 'Decentralised VPN', description: 'Next-gen VPN' }
    ],
    [
      { img: slider3, title: 'Advanced Encryption', description: 'Top-tier encryption' },
      { img: slider1, title: 'No Logs', description: 'Privacy first' },
      { img: slider2, title: 'Decentralised VPN', description: 'A new VPN system' }
    ]
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true); 
      
    }, 2600); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item xs={12}>
            <Typography variant='h2'  sx={{fontSize: { xs: '30px', sm: '40px', md: '45px' },color: '#171717',marginBottom: '10px'}} >
              Why Need
            </Typography>
            <Typography  variant='h2' sx={{fontSize: { xs: '35px', sm: '45px', md: '61px' }, color: '#171717', fontWeight: '600' }}>
              Use ExplorerVPN?
            </Typography>
            <Divider sx={{  width: '300px', margin: '20px auto', borderColor: '#FF5B4A', borderBottomWidth: 3,  marginBottom: '40px' }} />
            <Typography variant='body1'  sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' },  color: '#818181', maxWidth: '670px',  margin: '0 auto', textAlign: 'center' }}>
              Enjoy a more private and secure internet, block malicious websites, stop web trackers, and monitor your data leaks all in one app.
            </Typography>
        
            <CardContainer container spacing={2} justifyContent="center" marginTop="20px" >
              {cardsData[activeLine].map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Cardone>
                    <Cardimg src={card.img} alt={card.title} />
                    <Typography  sx={{  textAlign: 'left',  color: '#171717',  fontSize: { xs: '18px', sm: '20px', md: '22px' },  fontWeight: '600'  }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ textAlign: 'left',  color: '#171717',  fontSize: { xs: '14px', sm: '16px', md: '16px' } }}>
                      {card.description}
                    </Typography>
                  </Cardone>
                </Grid>
              ))}
            </CardContainer>

            {/* <LineNav>
              {[0, 1, 2].map((lineNumber) => (
                <LineButton  key={lineNumber} active={activeLine === lineNumber} onClick={() => handleLineChange(lineNumber)} /> ))}
            </LineNav> */}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Whyneed;
