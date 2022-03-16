import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: #4895ef;
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    color: #f72585;
  }
`;

export const MenuBlankLink = styled.a`
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: #4895ef;
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    color: #f72585;
  }
`;

export const Nav = styled.div<{ isOpen: boolean }>`
  max-width: 75%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    min-width: 100%;
    height: 30%;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "inset 768px 350px 768px #000000d1" : "none"};
  }
`;

export const Logo = styled.a<{ href?: string }>`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    position: relative;
    top: -10px;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transition: max-height 0.2s ease-in-out;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
