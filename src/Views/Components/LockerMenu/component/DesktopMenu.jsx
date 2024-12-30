import React from "react";
import logo from '../../../../assets/logo.svg'
import { DesktopMainMenu, MenuLink } from "../styles";


const DesktopMenu = (props) => {
  return (
    <DesktopMainMenu maxWidth="xl"  sx={{backgroundColor:'#000000',borderRadius:'40px',marginTop:'30px'}}>
      <MenuLink href="/" p="px" >
        <img src={logo} width="auto" height='auto' alt="Logo" style={{paddingTop:'10px'}} />
      </MenuLink>
      <div>
        {props.menuList.map((value, i) => (
          <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>
            {value.title}
          </MenuLink>
        ))}
      
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;