import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const TypingText = ({ text, delay }) => {
  const [isLargerThan564] = useMediaQuery("(min-width: 564px)");

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length - 1) {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return (
    <Flex justifyContent="center">
      <Text
        fontSize={isLargerThan564 ? "40px" : "26px"}
        fontWeight="bold"
        textAlign="center"
        color="white"
        marginX="1rem"
      >
        Bruno {typedText}
      </Text>
    </Flex>
  );
};
