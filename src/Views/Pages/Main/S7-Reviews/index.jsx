import { Box, Container, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';
import apple from '../../../../assets/apple.png';
import playstore from '../../../../assets/playstore.png';
import line1 from '../../../../assets/Line1.svg';

const Wrapper = styled(Box)`
  padding: 80px 0px;
  position: relative;
  overflow: hidden;
  background-color: #DFECF3;
  border-top: 9px solid #C3D7E2;
  border-bottom: 9px solid #C3D7E2;
`;

const CardsContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Card = styled(Box)`
  position: absolute;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 530px;
  text-align: left;
  transition: all 0.8s ease;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.zIndex};
  visibility: ${(props) => (props.opacity === 0 ? 'hidden' : 'visible')};
  filter: ${(props) => (props.isActive ? 'none' : 'blur(3px)')};
  cursor: pointer;  

  &:hover {
    filter: none;  
  }
`;

const UserInfoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const UserDetails = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserAvatar = styled(Box)`
  width: 40px;
  height: 40px;
  background-color: #e2eaee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-weight: bold;
  font-size: 16px;
`;

const DeviceInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DeviceIcon = styled('img')`
  width: 14px;
  height: 14px;
`;

const RatingWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LineNav = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const LineButton = styled('div')`
  width: 60px;
  height: 4px;
  background-color: ${({ active }) => (active ? '#ff5b4a' : '#a0a0a0')};
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ff5b4a;
  }
`;

const reviews = [
  {
    title: 'Excellent',
    text: 'Practically everything about this service is top-tier and as a whole, ExplorerVPN is quite simply one of the best VPNs right now.',
    user: 'John Doe',
    rating: 3,
    image: apple,
    device: 'Apple Device',
  },
  {
    title: 'Seamless Experience',
    text: 'The best thing about ExplorerVPN is its reliability and speed. I can always count on it when traveling abroad.',
    user: 'Jane Smith',
    rating: 4,
    image: playstore,
    device: 'Android Device',
  },
  {
    title: 'Amazing Service',
    text: 'ExplorerVPN provides excellent connectivity, ensuring a seamless browsing experience wherever I go. Highly recommended!',
    user: 'John Doe',
    rating: 5,
    image: apple,
    device: 'Apple Device',
  },
  {
    title: 'Seamless Experience',
    text: 'The best thing about ExplorerVPN is its reliability and speed. I can always count on it when traveling abroad.',
    user: 'John Doe',
    rating: 4,
    image: playstore,
    device: 'Android Device',
  },
  {
    title: 'Excellent',
    text: 'Practically everything about this service is top-tier and as a whole, ExplorerVPN is quite simply one of the best VPNs right now.',
    user: 'John Doe',
    rating: 5,
    image: apple,
    device: 'Apple Device',
  },
  {
    title: 'Excellent',
    text: 'Practically everything about this service is top-tier and as a whole, ExplorerVPN is quite simply one of the best VPNs right now.',
    user: 'John Doe',
    rating: 5,
    image: apple,
    device: 'Apple Device',
  },
  {
    title: 'Seamless Experience',
    text: 'The best thing about ExplorerVPN is its reliability and speed. I can always count on it when traveling abroad.',
    user: 'Jane Smith',
    rating: 4,
    image: playstore,
    device: 'Android Device',
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const calculateStyles = (index) => {
    const total = reviews.length;
    const offset = (index - activeIndex + total) % total;

    if (offset === 0) {
      // Active card in the center
      return {
        transform: 'translateY(20px) scale(1)',
        opacity: 1,
        zIndex: 3,
        isActive: true,
      };
    }
    if (offset === 1) {
      // Card immediately to the right
      return {
        transform: 'translateX(200px) translateY(25px) scale(0.9)',
        opacity: 0.8,
        zIndex: 2,
        isActive: false,
      };
    }
    if (offset === total - 1) {
      // Card immediately to the left
      return {
        transform: 'translateX(-200px) translateY(25px) scale(0.9)',
        opacity: 0.8,
        zIndex: 2,
        isActive: false,
      };
    }
    if (offset === 2) {
      // Second card to the right
      return {
        transform: 'translateX(400px) translateY(40px) scale(0.8)',
        opacity: 0.6,
        zIndex: 1,
        isActive: false,
      };
    }
    if (offset === total - 2) {
      // Second card to the left
      return {
        transform: 'translateX(-400px) translateY(40px) scale(0.8)',
        opacity: 0.6,
        zIndex: 1,
        isActive: false,
      };
    }

    // Cards beyond the second card on either side
    return {
      transform: 'translateX(0px) scale(0.7)',
      opacity: 0,
      zIndex: 0,
      isActive: false,
    };
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index) => {
    // Slide to the next card when clicked
    const total = reviews.length;
    const nextIndex = (index + 1) % total;
    setActiveIndex(nextIndex);
  };

  return (
    <Wrapper>
      <Container maxWidth="lg" style={{textAlign:'center'}}>
        <Typography variant="h2"sx={{color: '#171717',fontSize: { xs: '30px', sm: '35px', md: '45px' },marginBottom: '10px',textAlign: 'center',}}>
          Reviews
        </Typography>
        <Typography variant="h2" sx={{color: '#171717',fontWeight: '600',margin: '0 auto',textAlign: 'center',maxWidth: '850px',fontSize: { xs: '25px', sm: '30px', md: '61px' },}}>
          What People Are Saying About Explorer VPN
        </Typography>
        <img src={line1} alt='line' style={{width:'100%',maxWidth:'260px',height:'auto',marginTop:'30px'}}/>
        <CardsContainer>
          {reviews.map((review, index) => {
            const { transform, opacity, zIndex, isActive } = calculateStyles(index);
            return (
              <Card key={index}transform={transform}opacity={opacity}zIndex={zIndex}isActive={isActive}onClick={() => handleCardClick(index)} >
                <Typography variant="h6" sx={{fontSize: { xs: '18px', sm: '20px', md: '22px' },color: '#171717',marginBottom: '15px',fontWeight: '600',}}>
                  {review.title}
                </Typography>

                <Typography variant="body2" sx={{fontSize: { xs: '14px', sm: '15px', md: '16px' },color: '#818181',marginBottom: '30px',}}>
                  {review.text}
                </Typography>
                <Divider sx={{marginBottom: '20px',borderColor: '#E0E0E0',borderBottomWidth: 1,}}/>
                <UserInfoWrapper>
                  <UserDetails>
                    <UserAvatar>{review.user[0]}</UserAvatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{fontSize: { xs: '14px', sm: '15px' },fontWeight: '600',color: '#000000',}}>
                        {review.user}
                      </Typography>
                      <DeviceInfo>
                        <DeviceIcon src={review.image} alt="Device" />
                        <Typography variant="caption" sx={{fontSize: { xs: '12px', sm: '12px' },color: '#818181',}}>
                          {review.device}
                        </Typography>
                      </DeviceInfo>
                    </Box>
                  </UserDetails>
                  <RatingWrapper>
                    <Rating name="simple-controlled" defaultValue={review.rating} readOnly sx={{ color: '#FFB400' }} />
                  </RatingWrapper>
                </UserInfoWrapper>
              </Card>
            );
          })}
        </CardsContainer>

        <LineNav>
          {reviews.map((_, index) => (
            <LineButton key={index} active={index === activeIndex}onClick={() => handleDotClick(index)}/>))}
        </LineNav>
      </Container>
    </Wrapper>
  );
};

export default Reviews;
