import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ethers } from "ethers";
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(
  process.env.REACT_APP_MUMBAI_RPC_URL
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App provider={provider} />
  </ChakraProvider>
);

reportWebVitals();