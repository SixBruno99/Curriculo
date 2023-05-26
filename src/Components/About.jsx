import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  UnorderedList,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";

export const AboutMe = () => {
  const [isLargerThan456] = useMediaQuery('(min-width: 456px)')

  const textStyles = {
    py: "0.5rem",
    color: "white",
    fontWeight: "semibold",
    fontSize: isLargerThan456 ? "16px" : "12px",
    textAlign: isLargerThan456 ? "justify" : "left",
  };
  

  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold" color="white">
                Quem sou eu?
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text {...textStyles}>
              Sou estudante de Ciências da Computação apaixonado pelo mundo da
              tecnologia e, como desenvolvedor frontend, possuo experiência
              significativa com React. Estou em busca de oportunidades para
              aprimorar minhas habilidades técnicas e desenvolver meu
              conhecimento participando de projetos desafiadores. Tenho um forte
              desejo de crescer como profissional e estou sempre buscando novos
              desafios para expandir minha expertise. Estou confiante em minha
              capacidade de contribuir positivamente em um ambiente de equipe e
              estou animado para encontrar novas oportunidades para avançar em
              minha carreira de desenvolvedor.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold" color="white">
              Soft Skills
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList {...textStyles}>
              <ListItem>Comunicação eficaz</ListItem>
              <ListItem>Trabalho em equipe</ListItem>
              <ListItem>Resolução de problemas</ListItem>
              <ListItem>Pensamento crítico</ListItem>
              <ListItem>Flexibilidade</ListItem>
              <ListItem>Facilidade de interação</ListItem>
              <ListItem>Gestão do tempo</ListItem>
              <ListItem>Auto-motivação</ListItem>
              <ListItem>Aprendizado contínuo</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold" color="white">
              Hard Skills
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList {...textStyles}>
              <ListItem>HTML e CSS</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Nextjs</ListItem>
              <ListItem>Versionamento de código (Git, GitHub)</ListItem>
              <ListItem>Conhecimentos em UX/UI e experiência do usuário</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        {/* <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold" color="white">
              Projetos
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text {...textStyles}></Text>
          </AccordionPanel>
        </AccordionItem> */}

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold" color="white">
              Formação Acadêmica
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box {...textStyles}>
              <Text color="blueviolet">
                UniCeub Centro de Ensino Unificado de Brasília
              </Text>
              Ensino Superior cursando 5° semestre
            </Box>
            <Box {...textStyles}>
              <Text color="yellow.400">Colégio La Salle Águas Claras</Text>
              Ensino Médio (concluido em 2020)
            </Box>
            <Box {...textStyles}>
              <Text color="blue.500">Colégio Marista Asa Sul (Maristinha)</Text>
              Ensino Fundamental (concluído em 2017)
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
