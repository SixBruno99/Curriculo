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
            Pacote Office Excel. Desenvolvimento de habilidades especificas como
            a comunicação e o trabalho em equipe foram colocados em prática
            durante o processo.
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
            Tive a oportunidade de participar de um projeto onde aprendi e
            apliquei React. Fui guiado por uma equipe experiente, o que me
            permitiu aprimorar minhas habilidades de organização de código e
            aprender as melhores técnicas de versionamento. Além disso, adquiri
            conhecimento sobre boas práticas para melhorar a experiência do
            usuário.
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
        Dev Frontend
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        size={isLargerThan456 ? "md" : "xs"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent bg="#181818">
          <ModalHeader color="white">Desenvolvedor frontend web</ModalHeader>
          <ModalBody color="white">
            Com o desenvolvimento em react desenvolvi diversas habilidades como
            web design, navegação de telas, conexões com backend com tratativa
            de erros, manipulação de dados fictícios para testes locais, layout
            responsivo, configuração de projeto, padrão de código e código
            limpo, criação de formulários, utilização do ChakraUI como recurso
            de estilização, atualizações de tarefas através do trello.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
