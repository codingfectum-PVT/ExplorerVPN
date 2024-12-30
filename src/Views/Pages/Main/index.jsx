import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from './S1-Header'
import Explore from './S2-ExploreVPN'
import Why from './S3-Why'
import Whyneed from './S4-WhyNeed'
import Available from './S5-Available'
import SafestVPN from './S6-SafestVPN'
import Reviews from './S7-Reviews'
import styled from '@emotion/styled';
import background from '../../../assets/background.png'
import FAQ from './S8-FAQ'
import Footer from './S9-Footer'

const BgImageWrapper = styled(PageWrapper)`
  background-image: url(${background});
  background-size: cover; 
  background-repeat: no-repeat;



  @media (max-width: 769px) {
    background-size: contain;
    
  
  }
`;



const MainPage = (props) => {
  return (
    <PageWrapper>
        <Header/>
        <Explore/>
        <Why/>
        <Whyneed/>
        <Available/>
        <BgImageWrapper >
        <SafestVPN/>
        <Reviews/>
        <FAQ/>
        <Footer/>
        </BgImageWrapper>
    </PageWrapper>
  )
}

export default MainPage