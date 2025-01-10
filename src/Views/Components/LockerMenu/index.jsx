import { Box, Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [
        {
            title: "Business VPN",
            link: "#",
        },
        {
            title: "Features",
            link: "#",
        },
        {
            title: "Pricing",
            link: "#",
            target: "_blank"
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
            title: "Login",
            link: "#",
            target: "_blank",
            customClass: "login-item" // Add the custom class here
        },
        {
            title: "Get Explorer VPN",
            link: "#",
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

export default LockerMenu;
