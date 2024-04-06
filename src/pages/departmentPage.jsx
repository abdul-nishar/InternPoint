import { useState } from "react";
import {
  Heading,
  ButtonGroup,
  SimpleGrid,
  Card,
  CardFooter,
  CardBody,
  Image,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Header from "../components/defaultHeader";
import Pagination from "../components/pagination";
import FooterWrapper from "../components/defaultFooter";

export default function DepartmentPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const profData = [
    {
      name: "Prof 1",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 2",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 3",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 4",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 5",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 6",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 7",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 8",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 9",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 10",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 11",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 12",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 13",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 14",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 15",
      imageSrc: "https://bit.ly/dan-abramov",
    },
    {
      name: "Prof 16",
      imageSrc: "https://bit.ly/dan-abramov",
    },
  ];
  const itemsPerPage = 8;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return profData.slice(startIndex, endIndex);
  };

  return (
    <FooterWrapper>
      <Header />
      <Heading mt="3rem" ml="10%" mb="2rem">
        IIT MADRAS
      </Heading>

      <Box textAlign="center" mb="2rem">
        <ButtonGroup alignItems="center">
          <IconButton
            icon={<ChevronLeftIcon boxSize="1.5rem" />}
            color="#1D1818FF"
            bg="#FFF"
          />
          <Heading fontWeight="normal" fontSize="3rem">
            Computer Science
          </Heading>
          <IconButton
            icon={<ChevronRightIcon boxSize="1.5rem" />}
            color="#1D1818FF"
            bg="#FFF"
          />
        </ButtonGroup>
      </Box>

      <SimpleGrid columns={4} spacing={4} mx="5rem">
        {getCurrentItems().map((prof) => (
          <Card>
            <CardBody>
              <Image src={prof.imageSrc} alt="Some Professor" />
            </CardBody>
            <CardFooter justify="space-around">{prof.name}</CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <Pagination
        totalItems={profData.length}
        itemsPerPage={10}
        onPageChange={handlePageChange}
      />
    </FooterWrapper>
  );
}
