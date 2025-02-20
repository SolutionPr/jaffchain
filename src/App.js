import React from "react";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Update import statement
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import JaffTree from "./Pages/JaffTree/JaffTree";
import UserTransaction from "./Pages/UserTransaction/UserTransaction";
import Information from "./Pages/Info/Information";
import Layout from "./Pages/Layout/Layout";

import '@rainbow-me/rainbowkit/styles.css';


import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  bsc, bscTestnet
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Jafnews from "./Pages/Dashboard/jafNews/Jafnews";
import Downloads from "./Pages/Dashboard/Download/Downloads";
import Tutorial from "./Pages/Dashboard/Tutorial/Tutorial";
import Loader from "./Common/Components/Loader/Loader";



const config = getDefaultConfig({
  appName: 'jaf-chain',
  projectId: '532165c7db872e3b8247fc1de5463af0',
  chains: [bsc, bscTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();



function App() {

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider coolMode>
            <BrowserRouter>
              <Layout>
                <Routes>
                  {/* <Route exact path="/" element={<LandingPage />}></Route> */}
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/jafftree" element={<JaffTree />}></Route>
                  <Route path="/transactions" element={<UserTransaction />}></Route>
                  <Route path="/Information" element={<Information />}></Route>
                  <Route path="/jafnews" element={<Jafnews />}></Route>
                  <Route path="/download" element={<Downloads />}></Route>
                  <Route path="/tutorial" element={<Tutorial />}></Route>


                </Routes>
              </Layout>
            </BrowserRouter>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider >
      <ToastContainer />

    </>

  )
}
export default App;