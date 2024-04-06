import {
  Flex,
  Spacer,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Avatar,
} from "@chakra-ui/react";
import DefaultButton from "./defaultButton";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" mt="10px">
        <Spacer />
        <Box w="60%">
          <InputGroup size="lg">
            <InputLeftAddon>
              <SearchIcon />
            </InputLeftAddon>
            <Input placeholder="Search Product" />
          </InputGroup>
        </Box>
        <Spacer />

        <DefaultButton width="5rem" mr="1.5rem">
          Basic
        </DefaultButton>

        <Avatar src="https://bit.ly/broken-link" size="sm" mr="2rem" />
      </Flex>
    </>
  );
}
