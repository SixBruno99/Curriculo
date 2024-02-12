import {
  Box,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
} from "@chakra-ui/react";

// Components
import {
  FirstJobDescripition,
  SecondJobDescripition,
  ThirdDescripition,
} from "./Modals/JobDescripition";

export const Experience = () => {
  return (
    <Stepper
      colorScheme="orange"
      orientation="vertical"
      height="24rem"
      gap="0"
      mb="2rem"
    >
      <Step>
        <StepIndicator>
          <StepStatus active={<StepNumber color="white" />} />
        </StepIndicator>
        <Box>
          <FirstJobDescripition />
          <Text {...textStyles}>Março/2021 - Julho/2021</Text>
        </Box>
        <StepSeparator />
      </Step>
      <Step>
        <StepIndicator>
          <StepStatus active={<StepNumber color="white" />} />
        </StepIndicator>
        <Box>
          <SecondJobDescripition />
          <Text {...textStyles}>Maio/2022 - Novembro/2022</Text>
        </Box>
        <StepSeparator />
      </Step>
      <Step>
        <StepIndicator>
          <StepStatus active={<StepNumber color="white" />} />
        </StepIndicator>
        <Box>
          <ThirdDescripition />
          <Text {...textStyles}>Novembro/2022 - Atual</Text>
        </Box>
      </Step>
    </Stepper>
  );
};

const textStyles = {
  color: "white",
  marginLeft: "0.5rem",
  marginTop: "1rem",
  fontWeight: "bold",
};
