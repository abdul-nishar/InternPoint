import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

// import LoginPage from "./pages/loginPage";
import DepartmentPage from "./pages/departmentPage";
import { modalTheme } from "./themes/modalTheme";
import { buttonTheme } from "./themes/buttonTheme";
import "./App.css";

export const theme = extendTheme({
  components: { Modal: modalTheme, Button: buttonTheme },
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      {/* <LoginPage></LoginPage> */}
      <DepartmentPage></DepartmentPage>
    </ChakraBaseProvider>
  );
}

export default App;
