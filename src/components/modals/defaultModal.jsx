import { Modal } from "@chakra-ui/react";

export default function DefaultModal({ children }) {
  return (
    <>
      <Modal isOpen="true">{children}</Modal>
    </>
  );
}
