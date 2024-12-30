import React from 'react'
import styled from '@emotion/styled'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import underline from '../../../../assets/underline.png'
import explore from '../../../../assets/explore.png'

const Wrapper = styled(Box)`
  padding: 80px 0px;
`

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
`

const Exploreimg = styled('img')`
  width: 100%;
  max-width: 600px;
  @media (max-width: 600px) {
    padding-top: 15px;
  }
`

const Explore = () => {
  return (
    <Wrapper>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography  variant='body1' sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' },  color: '#818181', marginBottom: '10px'  }}>
              Save big on the world's leading VPN
            </Typography>
            <Typography  variant='h2'  sx={{  fontWeight: 600,  color: '#171717',  maxWidth: '600px',  fontSize: { xs: '30px', sm: '45px', md: '61px' }}} >
              The best dVPN for Speed and Security.
            </Typography>
            <TextWithImageWrapper>
              <img src={underline}  alt="Your browser does not support the image tag"  style={{ marginRight: 'auto', marginLeft: 'auto', marginBottom: '40px', marginTop: '10px' }}   />
            </TextWithImageWrapper>
            <Typography  variant='body1'  sx={{   color: '#818181', maxWidth: '520px', marginBottom: '40px',  fontSize: { xs: '14px', sm: '16px', md: '18px' }}}>
              Explorer VPN offers lightning-fast connections and cutting-edge encryption for ultimate online privacy. Enjoy secure, seamless browsing without compromising speed.
            </Typography>
            <ButtonEx>Get Explorer VPN</ButtonEx>
          </Grid>
          <Grid item xs={12} md={6}>
            <Exploreimg src={explore} alt='Your browser does not support the image tag'/>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Explore;
