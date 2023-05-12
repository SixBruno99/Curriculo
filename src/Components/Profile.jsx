import { Avatar, Flex, useMediaQuery } from "@chakra-ui/react";
import Foto from "../Images/foto.jpg";
import { useState } from "react";

export const Profile = () => {
  const [isLargerThan764] = useMediaQuery('(min-width: 764px)')

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Flex h="12rem" alignItems="center" justifyContent="center">
      <Avatar
        size={isLargerThan764 ? "2xl" : "xl"}
        name="Bruno Henrique"
        src={Foto}
        _hover={{
          transform: "scale(1.3)",
          transition: "transform 0.5s ease-in-out",
        }}
        transform={isHovered ? "scale(1.3)" : "scale(1)"}
        transition="transform 0.5s ease-in-out"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    </Flex>
  );
};
