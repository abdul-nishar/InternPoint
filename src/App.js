import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

import LoginModal from "./components/modals/loginModal";
import { modalTheme } from "./themes/modalTheme";
import { buttonTheme } from "./themes/buttonTheme";
import "./App.css";

export const theme = extendTheme({
  components: { Modal: modalTheme, Button: buttonTheme },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <LoginModal></LoginModal>
    </ChakraBaseProvider>
  );
}

export default App;
