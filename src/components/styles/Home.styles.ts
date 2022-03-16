import styled from "styled-components";
import { Container } from "./Container.styles";
import { MenuBlankLink } from "./Navbar.styles";

export const HomeContentontainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TextContainer = styled(Container)`
  max-width: 50%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  @media (max-width: 768px) {
    max-width: 95%;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const HomeMen = styled.img<{ h?: string; w?: string }>`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
`;

export const Button = styled.button<{
  w?: string;
  h?: string;
  p?: string;
  m?: string;
  size?: string;
  color?: string;
  weight?: string;
}>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-decoration: none;
  color: ${(props) => props.color};
  border: ${(props) => `1px solid ${props.color}`};
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #f72585;
    border-color: #f72585;
  }
`;

export const HomeLink = styled(MenuBlankLink)<{ color?: string }>`
  padding: 0;
  margin: 0;
  color: ${(props) => props.color};
`;
