import { Button } from "@chakra-ui/react";

const DefaultButton = function ({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

export default DefaultButton;
