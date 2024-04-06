import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";

import Header from "../components/defaultHeader";
import FooterWrapper from "../components/defaultFooter";
import DefaultButton from "../components/defaultButton";

export default function ProfessorPage() {
  return (
    <FooterWrapper>
      <Header />
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        mt="4rem"
        border="none"
      >
        <Stack ml="4rem">
          <Heading size="lg">Dr. Manav Gupta</Heading>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "400px" }}
            src="https://bit.ly/dan-abramov"
            alt="Caffe Latte"
          />
          <Flex>
            <DefaultButton size="xs" mx="4px">
              Prof's Page
            </DefaultButton>
            <DefaultButton size="xs" mx="4px">
              Contact
            </DefaultButton>
          </Flex>
        </Stack>

        <Stack ml="10rem">
          <CardBody>
            <Heading size="lg">IIT Madras</Heading>
            <br />
            <Heading size="lg" pl="6rem" mb="1rem">
              Department of Chemical Engineering
            </Heading>
            <hr />
            <Heading size="md" mt="1rem">
              Field of Interest:{" "}
            </Heading>
            <Flex my="0.7rem" gap={2}>
              <Text
                fontSize="0.7rem"
                bg="#DEE1E6FF"
                borderRadius="14px"
                px="6px"
                py="6px"
              >
                Propeller Design
              </Text>
              <Text
                fontSize="0.7rem"
                bg="#DEE1E6FF"
                borderRadius="14px"
                px="6px"
                py="6px"
              >
                Ship Architecture
              </Text>
              <Text
                fontSize="0.7rem"
                bg="#DEE1E6FF"
                borderRadius="14px"
                px="6px"
                py="6px"
              >
                Strength of Materials
              </Text>
              <Text
                fontSize="0.7rem"
                bg="#DEE1E6FF"
                borderRadius="14px"
                px="6px"
                py="6px"
              >
                Wave Dynamics
              </Text>
              <Text
                fontSize="0.7rem"
                bg="#DEE1E6FF"
                borderRadius="14px"
                px="6px"
                py="6px"
              >
                Ocean Structures
              </Text>
            </Flex>
            <Text
              width="100%"
              bg="#171A1FFF"
              color="#FFF"
              borderRadius="4px"
              fontWeight="semibold"
              borderColor="rgba(0, 0, 0, 0)"
              textAlign="center"
              py="7px"
            >
              Projects
            </Text>
            <Text fontWeight="bold" my="7px">
              Current Projects:
            </Text>
            <Flex direction="column" gap={2}>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Linear Optimisation of Processes
              </DefaultButton>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Use of AI in Chemical Engineering
              </DefaultButton>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Project Title
              </DefaultButton>
            </Flex>
            <Text fontWeight="bold" mt="1rem" mb="7px">
              Previous Projects:
            </Text>
            <Flex direction="column" gap={2}>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Robotic segregation of recyclable objects
              </DefaultButton>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Robotic segregation of recyclable objects
              </DefaultButton>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Robotic segregation of recyclable objects
              </DefaultButton>
              <DefaultButton
                bg="#DEE1E6FF"
                color="#000"
                width="100%"
                justifyContent="start"
              >
                Robotic segregation of recyclable objects
              </DefaultButton>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </FooterWrapper>
  );
}
