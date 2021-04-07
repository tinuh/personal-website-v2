import React from 'react';
import ReactDOM from 'react-dom';
//import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./lib/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme = {theme} resetCSS = {true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
