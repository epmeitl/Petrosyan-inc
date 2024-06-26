import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesProviders from "./routes/routes";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <RoutesProviders />
      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
