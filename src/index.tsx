import React from 'react';
import ReactDOM from 'react-dom';
//import './style/index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme = {theme} resetCSS = {true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);