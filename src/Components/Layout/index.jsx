import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

// Components imports
import { Contacts } from "../Contacts.jsx";
import { Profile } from "../Profile.jsx";
import { Skills } from "../Skills/index.jsx";
import { AboutMe } from "../About.jsx";
import { Experience } from "../Experience/Job.jsx";
import { SocialMedias } from "../Social.jsx";
import { TypingText } from "../AnimatedText.jsx";

export const Layout = () => {
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

  return (
    <Box maxW={840} marginX="auto">
      <Grid gridTemplateColumns="1fr 2fr" minHeight="100vh" >
        <GridItem bg="black">
          <Box justifyContent="center">
            <Profile />
          </Box>
          <SocialMedias />
          <Contacts />
          <Skills />
        </GridItem>
        <GridItem bg="#181818">
          <Flex h={isLargerThan764 ? "12rem" : "16rem"} alignItems="center">
            <TypingText
              text=" Bruno Henrique Ferreira Marinho Cecílio"
              delay={100}
            />
          </Flex>
          <Box maxW={isLargerThan764 ? "80%" : "90%"} margin="auto">
            <AboutMe />
            <Text py="2rem" fontSize="24px" fontWeight="bold" color="white">
              Experiência
            </Text>
            <Experience />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
