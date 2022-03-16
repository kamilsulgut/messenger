import styled from "styled-components";
import { Container } from "./Container.styles";

export const HomeContentontainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const TextContainer = styled(Container)`
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const HomeMen = styled.img<{ h?: string; w?: string }>`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
`;
