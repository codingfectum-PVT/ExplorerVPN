import React from "react";
import logo from "../../../../assets/logo.svg";
import { DesktopMainMenu, MenuLink } from "../styles";

const DesktopMenu = (props) => {
  return (
    <DesktopMainMenu
      maxWidth="xl"
      sx={{
        backgroundColor: "#000000",
        borderRadius: "60px",
        marginTop: "30px",
        padding: "10px",
      }}
    >
      <MenuLink href="/" p="px">
        <img
          src={logo}
          width="110%"
          height="auto"
          alt="Logo"
          style={{ paddingTop: "10px" }}
        />
      </MenuLink>
      <div>
        {props.menuList.map((value, i) => (
          <MenuLink
            key={i}
            href={value.link}
            target={value.target}
            className={value.customClass}
            sx={value.customClass === "login-item" ? { marginLeft: "130px",marginRight:'20px' } : {}}
          >
            {value.title}
          </MenuLink>
        ))}
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;
