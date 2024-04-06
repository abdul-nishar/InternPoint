import React, { useState } from "react";
import { Flex, HStack, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import DefaultButton from "./defaultButton";

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
      onPageChange(nextPage);
    }
  };

  const goToPrevPage = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      setCurrentPage(prevPage);
      onPageChange(prevPage);
    }
  };

  return (
    <Flex align="center" justify="center" my="3rem" gap={2}>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Page"
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        color="#1D1818FF"
        bg="#FFF"
      />
      <HStack>
        {[...Array(totalPages)].map((_, index) => (
          <DefaultButton
            onClick={() => goToPage(index + 1)}
            color={currentPage === index + 1 ? "#FFF" : "#1D1818FF"}
            bg={currentPage === index + 1 ? "#1D1818FF" : "#FFF"}
          >
            {index + 1}
          </DefaultButton>
        ))}
      </HStack>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Page"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        color="#1D1818FF"
        bg="#FFF"
      />
    </Flex>
  );
}

export default Pagination;
