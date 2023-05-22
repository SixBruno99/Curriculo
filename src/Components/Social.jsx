import { Flex } from "@chakra-ui/react";
import { useState } from "react";

// Icons
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const SocialMedias = () => {
  const [githubColor, setGithubColor] = useState("white");
  const [linkedinColor, setLinkedinColor] = useState("white");
  const [whatsappColor, setWhatsappColor] = useState("white");

  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);

  const handleEnterGithub = (setter) => {
    setter(true);
    setGithubColor("#9D1BF2");
  };

  const handleLeaveGithub = (setter) => {
    setter(false);
    setGithubColor("white");
  };

  const handleEnterLinkedin = (setter) => {
    setter(true);
    setLinkedinColor("#0077B5");
  };

  const handleLeaveLinkedin = (setter) => {
    setter(false);
    setLinkedinColor("white");
  };

  const handleEnterWhatsapp = (setter) => {
    setter(true);
    setWhatsappColor("#25D366");
  };

  const handleLeaveWhatsapp = (setter) => {
    setter(false);
    setWhatsappColor("white");
  };

  return (
    <Flex px="1rem" py="1rem" justifyContent="center" gap="1rem">
      <AiFillGithub
        color={githubColor}
        size={32}
        style={{
          transform: githubHovered ? "scale(1.3)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={() => handleEnterGithub(setGithubHovered)}
        onMouseLeave={() => handleLeaveGithub(setGithubHovered)}
        onClick={() => window.open("https://github.com/SixBruno99", "_blank")}
      />
      <IoLogoLinkedin
        color={linkedinColor}
        size={32}
        style={{
          transform: linkedinHovered ? "scale(1.3)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={() => handleEnterLinkedin(setLinkedinHovered)}
        onMouseLeave={() => handleLeaveLinkedin(setLinkedinHovered)}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/bruno-henrique-ferreira-marinho-cec%C3%ADlio-811858222/",
            "_blank"
          )
        }
      />
      <FaWhatsapp
        color={whatsappColor}
        size={32}
        style={{
          transform: whatsappHovered ? "scale(1.3)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={() => handleEnterWhatsapp(setWhatsappHovered)}
        onMouseLeave={() => handleLeaveWhatsapp(setWhatsappHovered)}
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=5561981030795&text&type=phone_number&app_absent=0",
            "_blank"
          )
        }
      />
    </Flex>
  );
};
