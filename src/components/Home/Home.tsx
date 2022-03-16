import React from "react";
import { Text } from "../styles/Container.styles";
import {
  HomeContentontainer,
  HomeMen,
  TextContainer,
} from "../styles/Home.styles";
import img from "../../Images/he_sitting.png";

const Home = () => {
  return (
    <HomeContentontainer w="85%">
      <TextContainer h="100%">
        <Text color="#4CC9F0" size="6rem" weight="600" m="1rem 0 ">
          Welcome!
        </Text>
        <Text color="#4895EF" size="3rem" weight="400" m="0.8rem">
          I would like to invite you to check out this project.
        </Text>
        <Text color="#4895EF" size="3rem" weight="400" m="0.8rem">
          In this project, I created my own alternative version of a
          communication application.
        </Text>
        <Text color="#4895EF" size="3rem" weight="400" m="0.8rem">
          Lets chat together!
        </Text>
      </TextContainer>

      <HomeMen h="500px" src={img} />
    </HomeContentontainer>
  );
};

export default Home;
