import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

export const FirstJobDescripition = () => {
  const [isLargerThan456] = useMediaQuery("(min-width: 456px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onOpen}
        marginLeft="0.5rem"
        w="8rem"
        colorScheme="orange"
        color="white"
      >
        Projeto Social
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        size={isLargerThan456 ? "md" : "xs"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent bg="#181818">
          <ModalHeader color="white">
            Estagiário projeto social - Inclusão Digital para comunidade (CEUB)
          </ModalHeader>
          <ModalBody color="white">
            Projeto no qual foi desenvolvido habilidades com a ferramenta do
            Pacote Office Excel. A intenção do projeto tinha foco no ensinamento
            prático de como utilizar a ferramenta com exemplos práticos de
            situações do dia a dia.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export const SecondJobDescripition = () => {
  const [isLargerThan456] = useMediaQuery("(min-width: 456px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onOpen}
        marginLeft="0.5rem"
        w="8rem"
        colorScheme="orange"
        color="white"
      >
        Estágio
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        size={isLargerThan456 ? "md" : "xs"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent bg="#181818">
          <ModalHeader color="white">
            Estagiário desenvolvedor frontend
          </ModalHeader>
          <ModalBody color="white">
            Projeto no qual tive a oportunidade de estudar e aplicar os
            conhecimentos adquiridos em react através da construção de
            landing-pages como teste de conhecimento.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export const ThirdDescripition = () => {
  const [isLargerThan456] = useMediaQuery("(min-width: 456px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onOpen}
        marginLeft="0.5rem"
        w="8rem"
        colorScheme="orange"
        color="white"
      >
        FreeLancer
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        size={isLargerThan456 ? "md" : "xs"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent bg="#181818">
          <ModalHeader color="white">
            FreeLancer desenvolvedor frontend
          </ModalHeader>
          <ModalBody color="white">
            Projeto em andamento no qual estou desenvolvendo um aplicativo
            utilizando o Flutter, nesse projeto estou aprimorando minhas
            habilidade de construção de layouts com outra linguagem e
            manipulando váriaveis globais no projeto para realizar o controle
            de estoque de produtos.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
