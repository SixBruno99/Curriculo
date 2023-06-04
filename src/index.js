import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const theme = extendTheme({
  fonts: {
    body: "sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
