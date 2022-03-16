import React from "react";
import { useNavigate } from "react-router-dom";

import { Text } from "../styles/Container.styles";
import {
  HomeContentontainer,
  HomeMen,
  TextContainer,
  Button,
  HomeLink,
} from "../styles/Home.styles";
import img from "../../Images/he_sitting.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContentontainer w="85%">
      <TextContainer h="100%">
        <Text color="#4CC9F0" size="6.5rem" weight="600" m="1rem 0 ">
          Welcome!
        </Text>
        <Text color="#4895EF" size="3rem" weight="400" m="0.8rem">
          I would like to invite you to check out this project.
        </Text>
        <Text color="#4895EF" size="3rem" weight="400" m="0.8rem">
          In this project, I created my own alternative version of a
          communication application.
        </Text>
        <Button
          color="#4895EF"
          size="2rem"
          p="1rem"
          weight="400"
          m="0.8rem"
          onClick={() => navigate("/app")}
        >
          Lets chat together!
        </Button>
        <Button color="#4895EF" size="2rem" p="1rem" weight="400" m="0.8rem">
          <HomeLink
            href="https://www.linkedin.com/in/kamilsulgut/"
            target="_blank"
          >
            Get to know me better!
          </HomeLink>
        </Button>
      </TextContainer>

      <HomeMen h="500px" src={img} />
    </HomeContentontainer>
  );
};

export default Home;
