import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import './index.css';

import { Languages } from './languages';

// Icons imports
import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { SiGit, SiFlutter } from "react-icons/si";

export const Skills = () => {
  return (
    <Box px="1rem">
      <Flex {...flexStyle}>
        <FaHtml5 size={20} style={{ color: "#E34F26" }} />
        <Text {...textStyles}>HTML</Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="orange"
        bg="rgba(227, 79, 38, 1)"
        isAnimated={true}
        value={100}
      />
      <Flex {...flexStyle}>
        <FaCss3 size={20} style={{ color: "#1572B6 " }} />
        <Text {...textStyles}>CSS</Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="blue"
        bg="rgba(21, 114, 182, 1)"
        isAnimated={true}
        value={80}
      />
      <Flex {...flexStyle}>
        <FaJsSquare size={20} style={{ color: "#F7DF1E " }} />
        <Text {...textStyles}>JavaScript</Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="yellow"
        bg="rgba(247, 223, 30, 0.6)"
        isAnimated={true}
        value={70}
      />
      <Flex {...flexStyle}>
        <FaReact className="rotate" size={20} style={{ color: "#34AEEB " }} />
        <Text {...textStyles}>React</Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="cyan"
        bg="rgba(97, 218, 251, 0.5)"
        isAnimated={true}
        value={60}
      />
      <Flex {...flexStyle}>
        <SiFlutter  size={20} style={{ color: "#34C759 " }} />
        <Text {...textStyles}>Flutter</Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="whatsapp"
        bg="rgba(52, 199, 89, 0.75)"
        isAnimated={true}
        value={50}
      />
      <Flex {...flexStyle}>
        <SiGit size={20}style={{ color: "#F05033 " }} />
        <Text {...textStyles}>Git</Text>
      </Flex>
      <Progress
        hasStripe
        colorScheme="orange"
        bg="rgba(240, 80, 51, 0.5)"
        isAnimated={true}
        value={80}
      />
      <Languages />
    </Box>
  );
};

const flexStyle = {
  alignItems: "center",
  paddingY: "0.9rem",
};

const textStyles = {
  color: "white",
  marginLeft: "0.5rem",
  fontWeight: "bold",
};
