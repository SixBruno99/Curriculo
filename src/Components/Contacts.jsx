import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

// Icons
import { AiOutlineMail } from "react-icons/ai";
// import { BsPhone } from "react-icons/bs";
// import { MdLocationPin } from "react-icons/md";

export const Contacts = () => {
  const [isLargerThan516] = useMediaQuery("(min-width: 516px)");
  const [isLargerThan764] = useMediaQuery("(min-width: 764px)");

  const textStyles = {
    color: "white",
    marginLeft: isLargerThan764 ? "0.5rem" : "0",
    fontWeight: "semibold",
    fontSize: isLargerThan516 ? "16px" : "12px",
  };

  const [isHoveredMail, setIsHoveredMail] = useState(false);
  // const [isHoveredPhone, setIsHoveredPhone] = useState(false);
  // const [isHoveredLocation, setIsHoveredLocation] = useState(false);

  const handleHoverMail = () => {
    setIsHoveredMail(!isHoveredMail);
  };

  // const handleHoverPhone = () => {
  //   setIsHoveredPhone(!isHoveredPhone);
  // };

  // const handleHoverLocation = () => {
  //   setIsHoveredLocation(!isHoveredLocation);
  // };

  return (
    <Flex flexDirection="column" justifyContent="center">
      <Flex
        alignItems="center"
        justifyContent="center"
        paddingLeft={isLargerThan516 ? "1rem" : "0"}
        py="0.5rem"
      >
        <Box display={isLargerThan764 ? "flex" : "none"}>
          <AiOutlineMail
            color="white"
            size={20}
            _hover={{
              transform: "scale(1.5)",
            }}
            transform={isHoveredMail ? "scale(1.5)" : "scale(1)"}
            onMouseEnter={handleHoverMail}
            onMouseLeave={handleHoverMail}
          />
        </Box>

        <Text {...textStyles}>brunohc2016@gmail.com</Text>
      </Flex>
      {/* <Flex alignItems="center" paddingLeft="1rem" py="0.5rem">
        <BsPhone
          color="white"
          size={20}
          _hover={{
            transform: "scale(1.5)",
          }}
          transform={isHoveredPhone ? "scale(1.5)" : "scale(1)"}
          onMouseEnter={handleHoverPhone}
          onMouseLeave={handleHoverPhone}
        />

        <Text {...textStyles}>(61) 98103-0795</Text>
      </Flex>
      <Flex alignItems="center" paddingLeft="1rem" py="0.5rem">
        <MdLocationPin
          color="white"
          size={20}
          _hover={{
            transform: "scale(1.5)",
          }}
          transform={isHoveredLocation ? "scale(1.5)" : "scale(1)"}
          onMouseEnter={handleHoverLocation}
          onMouseLeave={handleHoverLocation}
        />
        <Text {...textStyles}>Brasília - DF</Text>
      </Flex> */}
    </Flex>
  );
};
