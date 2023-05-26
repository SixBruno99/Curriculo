import { Flex } from "@chakra-ui/react";
import { useState } from "react";

// Icons
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
// import { FiMail } from "react-icons/fi";

export const SocialMedias = () => {
  const defautColor = "white";

  const [githubColor, setGithubColor] = useState(defautColor);
  const [linkedinColor, setLinkedinColor] = useState(defautColor);
  const [whatsappColor, setWhatsappColor] = useState(defautColor);
  // const [emailColor, setEmailColor] = useState(defautColor);

  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  // const [emailHovered, setEmailHovered] = useState(false);

  const handleEnterGithub = (setter) => {
    setter(true);
    setGithubColor("#9D1BF2");
  };

  const handleLeaveGithub = (setter) => {
    setter(false);
    setGithubColor(defautColor);
  };

  const handleEnterLinkedin = (setter) => {
    setter(true);
    setLinkedinColor("#0077B5");
  };

  const handleLeaveLinkedin = (setter) => {
    setter(false);
    setLinkedinColor(defautColor);
  };

  const handleEnterWhatsapp = (setter) => {
    setter(true);
    setWhatsappColor("#25D366");
  };

  const handleLeaveWhatsapp = (setter) => {
    setter(false);
    setWhatsappColor(defautColor);
  };

  // const handleEnterEmail = () => {
  //   setEmailHovered(true);
  //   setEmailColor("#D44638");
  // };

  // const handleLeaveEmail = () => {
  //   setEmailHovered(false);
  //   setEmailColor(defautColor);
  // };

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
      {/* <FiMail
        color={emailColor}
        size={32}
        style={{
          transform: emailHovered ? "scale(1.3)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseEnter={handleEnterEmail}
        onMouseLeave={handleLeaveEmail}
        onClick={window.open(
          "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKpBdHqJgfrkQpqxkKRFwDvnKpWXnqcsSwGCZhXqShLqtCnmbScmmsrSKtdFpmDLCBRPL",
          "_blank"
        )}
      /> */}
    </Flex>
  );
};
