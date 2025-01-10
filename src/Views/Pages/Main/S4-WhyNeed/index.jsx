import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Card, Button } from '@mui/material';
import underline from '../../../../assets/underline.svg';
import cardone from '../../../../assets/cardone.svg';
import cardtwo from '../../../../assets/cardtwo.svg';
import cardthree from '../../../../assets/cardthree.svg';
import cardline from '../../../../assets/cardline.svg';

const Wrapper = styled(Box)`
  padding: 80px 0px;
`;

const FeatureCard = styled(Card)`
  background-color: ${({ index }) => (index === 1 ? '#ffffff' : '#F0F3F6')};
  padding: 34px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 370px;
  height: 110%;
  border: 1px solid #D3DBE2;
  margin-bottom: 10px;
  transition: transform 0.5s ease;
  position: relative;
  &:hover {
    transform: translateY(-20px);
  }


  ${({ isSecondCard }) =>
    isSecondCard &&
    `
    background-image: url(${cardline});
      background-position: center Top 4%; 
    background-repeat: no-repeat;
    background-size: 35%; 
  `}
`;

const Icon = styled('img')`
  width: 60px;
  height: 60px;
  margin-bottom: 25px;
`;

const Title = styled(Typography)`
  font-size: 23px;
  font-weight: 600;
  color: #171717;
  margin-bottom: 20px;
  max-width: ${({ index }) => (index === 1 ? 'none' : '250px')};
`;

const Description = styled(Typography)`
  color: #171717;
  font-size: 14px;

`;

const FeaturesButton = styled(Button)`
  background-color: #000000;
  color: #ffffff;
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 40px;
  text-transform: none;
  transition: transform 0.3s ease;  

&:hover {
  background-color: #000000;  
  transform: scale(1.1); 
}
`;

const Features = () => {
  const cards = [
    {
      img: cardone,
      title: 'Browse at the highest speeds',
      description:
        'Our 10 Gbps server network combined with our unique VPN Accelerator increases your VPN speeds by up to 400% without compromising stability or security.',
    },
    {
      img: cardtwo,
      title: 'Bypass censorship and get all sides of the story',
      description:
        'With Stealth, our custom VPN protocol, you can bypass government restrictions to access censored sites and social media while disguising your VPN connection.',
    },
    {
      img: cardthree,
      title: 'Explore the internet with total privacy',
      description:
        "We don’t log your activity or share data with third parties. And, because we’re based in Switzerland, home of some of the world’s strictest privacy laws, we can’t be forced to.",
    },
  ];

  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography  variant="h2" sx={{fontSize: { xs: '30px', sm: '40px', md: '50px' },color: '#171717',fontWeight: '600',textAlign: 'center',marginBottom: '10px',}}>
            Features
          </Typography>
          <img src={underline} alt="underline" style={{ width: '100%', maxWidth: '250px', height: 'auto' }}/>
          <Typography variant="body1" sx={{fontSize: { xs: '14px', sm: '16px', md: '18px' },color: '#818181',maxWidth: '600px',margin: '15px auto',textAlign: 'center',marginBottom: '60px',}} >
            With ExplorerVPN, you can also bypass censorship and access websites that might be blocked in your country.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 8, md: 4 }} justifyContent="center" mb={8}>
          {cards.map((card, index) => (
            <Grid item sm={6} md={4} key={index}>
              <FeatureCard isSecondCard={index === 1} index={index}>
                <Icon src={card.img} alt={card.title} />
                <Title index={index}>{card.title}</Title>
                <Description>{card.description}</Description>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <FeaturesButton>See All Features</FeaturesButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Features;
