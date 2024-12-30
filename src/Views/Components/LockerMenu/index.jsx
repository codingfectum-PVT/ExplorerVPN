import { Box, Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "Features",
        link: "#",
        },
        {
        title: "Pricing",
        link: "#",
        },
        {
        title: "Download",
        link: "#",
        target: "_blank"
        },
        {
          title: "Help",
          link: "#",
          target: "_blank"
          },
        {
        title: "Get App",
        link: "#",
        customClass: "",
        target: "_blank"
        },
    ];
  return (
   
    <Container maxWidth='xl'>
      
        <DesktopMenu menuList={menuList} />
   
        <MobileMenu menuList={menuList} />
     
    </Container>

  )
}

export default LockerMenu