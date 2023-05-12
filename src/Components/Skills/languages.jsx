import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { Box, Flex, Progress, Text } from "@chakra-ui/react";
// import FlagIcon from 'react-flag-icon-css';

export const Languages = () => {
  return (
    <Box py="1rem">
      <Flex alignItems="center" py="0.9rem">
        <GiBrazilFlag color="white" /> {/* ícone da bandeira do Brasil */}
        <Text {...textStyles}>
          Português
        </Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="whiteAlpha"
        bg="rgba(255,255,255, 0.1)"
        isAnimated={true}
        value={100}
      />
      <Flex alignItems="center" py="1rem">
        <FaFlagUsa color="white" /> {/* ícone da bandeira dos EUA */}
        <Text {...textStyles}>
          Inglês
        </Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="whiteAlpha"
        bg="rgba(255,255,255, 0.1)"
        isAnimated={true}
        value={60}
      />
      
      {/* <FlagIcon code="br" /> */}
      {/* <FlagIcon code="us" />  */}
    </Box>
  );
};

const textStyles = {
  color: "white",
  marginLeft: "0.5rem",
  fontWeight: "bold",
};
