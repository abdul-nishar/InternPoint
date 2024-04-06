import { Flex, Link, Icon, Spacer, Text } from "@chakra-ui/react";
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";

export default function FooterWrapper({ children }) {
  return (
    <Flex direction="column" minHeight="100vh" justify="space-between">
      <Flex direction="column" flex="1">
        {children}
      </Flex>
      <Flex align="center" justify="end" pt={4} mb={1}>
        <Link href="https://www.twitter.com/" isExternal mx={2}>
          <Icon as={FaTwitter} boxSize={4} color="#2EBAE8FF" />
        </Link>
        <Link href="https://www.facebook.com/" isExternal mx={2}>
          <Icon as={FaFacebook} boxSize={4} color="#2E6FE8FF" />
        </Link>
        <Link href="https://www.linkedin.com/" isExternal mx={2}>
          <Icon as={FaLinkedin} boxSize={4} color="#7797E4FF" />
        </Link>
        <Link href="https://www.youtube.com/" isExternal mx={2}>
          <Icon as={FaYoutube} boxSize={4} color="#E82E2EFF" />
        </Link>
      </Flex>
      <Flex align="center" pb="0.4rem">
        <Flex gap={4} pl="1rem">
          <Link href="#" mx={2} fontWeight="semibold">
            About
          </Link>
          <Link href="#" mx={2} fontWeight="semibold">
            Help
          </Link>
          <Link href="#" mx={2} fontWeight="semibold">
            Contact
          </Link>
        </Flex>

        <Spacer />
        <Link href="#" mx={2} fontSize="0.7rem">
          © 2022 Brand, Inc.
        </Link>
        <Text>·</Text>
        <Link href="#" mx={2} fontSize="0.7rem">
          Privacy
        </Link>
        <Text>·</Text>
        <Link href="#" mx={2} fontSize="0.7rem">
          Terms
        </Link>
      </Flex>
    </Flex>
  );
}
