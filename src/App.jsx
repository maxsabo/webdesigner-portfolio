import "./App.scss";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="wrapper__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
