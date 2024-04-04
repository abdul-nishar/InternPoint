import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Checkbox,
  Link,
  Box,
} from "@chakra-ui/react";

import DefaultModal from "./defaultModal";
import DefaultButton from "../defaultButton";
import { GoogleIcon } from "../icons";

export default function LoginModal() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <DefaultModal>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <div>Welcome.</div>
          <Box fontSize="small" color="#9095A1FF" fontWeight="semi-bold">
            Please fill in your credentials
          </Box>
        </ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel fontSize="small" fontWeight="bold" mt="20px">
              Phone Number
            </FormLabel>

            <Input type="Number" placeholder="Enter your phone number" />
            <FormLabel fontSize="small" fontWeight="bold" mt="20px">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
            <Stack spacing={5} direction="row" margin="1rem auto">
              <Checkbox colorScheme="purple">
                I agree with{" "}
                <Link color="#379AE6FF" textDecoration="underline">
                  Terms and Conditions
                </Link>
              </Checkbox>
            </Stack>
            <DefaultButton
              width="100%"
              background="#1F1C1CFF"
              my="4px"
              _hover={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
              }}
            >
              Login
            </DefaultButton>
            <Box
              my="1.5rem"
              color=" #9095A1FF"
              fontWeight="400"
              textAlign="center"
            >
              Or sign in with
            </Box>
            <Box textAlign="center">
              <DefaultButton
                width="50%"
                background="#FEF1F1FF"
                _hover={{
                  boxShadow: "0 4px 6px rgba(199,22, 16, 0.5)",
                  fontSize: "1.2rem",
                }}
              >
                <GoogleIcon />
              </DefaultButton>
            </Box>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </DefaultModal>
  );
}
