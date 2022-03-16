import React, { useState } from "react";

import {
  Nav,
  MenuBlankLink,
  Hamburger,
  Menu,
  MenuLink,
} from "../styles/Navbar.styles";
import navbarItems from "./NavbarItems";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav isOpen={isOpen}>
      {/* <Logo href="">
        Eli<span>Codes</span>
      </Logo> */}
      {/* Optional logo to display, before use import!! */}
      <Hamburger onClick={togleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navbarItems.map((el) => {
          return isOpen ? (
            el.blank ? (
              <MenuBlankLink
                href={`${el.link}`}
                target="_blank"
                key={el.id}
                onClick={togleMenu}
              >
                {el.title}
              </MenuBlankLink>
            ) : (
              <MenuLink to={`${el.link}`} key={el.id} onClick={togleMenu}>
                {el.title}
              </MenuLink>
            )
          ) : el.blank ? (
            <MenuBlankLink
              href={`${el.link}`}
              target="_blank"
              key={el.id}
              onClick={togleMenu}
            >
              {el.title}
            </MenuBlankLink>
          ) : (
            <MenuLink to={`${el.link}`} key={el.id} onClick={togleMenu}>
              {el.title}
            </MenuLink>
          );
        })}
      </Menu>
    </Nav>
  );
};

export default Navbar;
