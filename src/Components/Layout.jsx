import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

// Components imports
import { Contacts } from "./Contacts";
import { Profile } from "./Profile";
import { Skills } from "./Skills/index.jsx";
import { AboutMe } from "./About";
import { Experience } from "./Experience/Job";
import { SocialMedias } from "./Social";

export const Layout = () => {
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

  return (
    <Box maxW={840} marginX="auto">
      <Grid gridTemplateColumns="1fr 2fr" minHeight="100vh">
        <GridItem bg="black">
          <Box justifyContent="center">
            <Profile />
          </Box>
          <SocialMedias />
          <Contacts />
          <Skills />
        </GridItem>
        <GridItem bg="#181818">
          <Flex h="12rem" alignItems="center">
            <Text
              w="100%"
              fontSize={isLargerThan764 ? "40px" : "26px"}
              fontWeight="bold"
              textAlign="center"
              color="white"
            >
              Bruno Henrique Ferreira Marinho Cecílio
            </Text>
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
