import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./tabs/Home";
import { Projects } from "./tabs/Projects";
import { Contacts } from "./tabs/Contacts";
import CryptoWalletPage from "./components/pages/CryptoWalletPage/CryptoWalletPage";


export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="crypto-wallet" element={<CryptoWalletPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
