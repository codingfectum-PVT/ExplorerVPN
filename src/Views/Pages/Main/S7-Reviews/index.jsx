import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';
import apple from '../../../../assets/apple.png';
import playstore from '../../../../assets/playstore.png';

const Wrapper = styled(Box)`
  padding: 80px 0px;
`;

const Card = styled(Box)`
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 55px;
  text-align: left;
  position: relative;
`;

const RatingWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px; 
`;

const Apple = styled('img')`
  width: 100%;
  max-width: 30px;
`;

const Reviews = () => {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container xs={12} justifyContent={'center'} textAlign={'center'}>
          <Grid>
            <Typography  variant="h2" sx={{ color: '#171717', fontSize: { xs: '30px', sm: '35px', md: '45px' }, marginBottom: '10px' }}>
              Reviews
            </Typography>
            <Typography variant="h2" sx={{ color: '#171717',fontWeight: '600',margin: '0 auto',textAlign: 'center',maxWidth: '850px',fontSize: { xs: '25px', sm: '30px', md: '61px' }}}>
              What People Are Saying About Explorer VPN
            </Typography>
            <Divider sx={{ width: '300px', margin: '20px auto', borderColor: '#FF5B4A', borderBottomWidth: 3, marginBottom: '20px'  }} />
            <Grid container spacing={4} sx={{ marginTop: '40px' }}>
              <Grid item xs={12} md={6}>
                <Card>
                  <Typography variant="h2"sx={{ fontSize: { xs: '28px', sm: '32px', md: '32px' },  color: '#171717', marginBottom: '40px', fontWeight: '600' }}>
                    Excellent
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#818181', marginBottom: '60px' }}>
                    Practically everything about this service is top-tier and as a whole, ExplorerVPN is quite simply one of the best VPNs right now.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '400', color: '#000000' }}>
                    Username
                  </Typography>
                  <RatingWrapper>
                    <Rating ame="simple-uncontrolled" defaultValue={5} readOnly sx={{ color: '#FFB400' }} />
                    <Apple src={apple} alt="Apple" />
                  </RatingWrapper>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <Typography variant="h2"sx={{ fontSize: { xs: '28px', sm: '32px', md: '32px' }, color: '#171717', marginBottom: '40px', fontWeight: '600'  }}>
                    Great VPN!
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#818181', marginBottom: '40px' }}>
                    The bottom line here is: When you’re online, you don’t have to worry about being secure or about your information getting out there if you have a VPN. Explorer VPN makes it simple.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' }, fontWeight: '400', color: '#000000' }}>
                    Username
                  </Typography>
                  <RatingWrapper>
                    <Rating ame="simple-uncontrolled" defaultValue={5} readOnly sx={{ color: '#FFB400' }} />
                    <Apple src={playstore} alt="Play Store" />
                  </RatingWrapper>
                </Card>
              </Grid>
            </Grid>
            <Typography variant='body1'  sx={{ color: '#818181', fontSize: { xs: '12px', sm: '14px', md: '14px' },  marginTop: '50px'  }}>
              A sampling of reviews from our most satisfied customers. For all our reviews, check out the App Store or Google Play.
            </Typography>
          </Grid>
        </Grid>   
      </Container>
    </Wrapper>
  );
};

export default Reviews;
