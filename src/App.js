import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import QualitySeals from "./components/QualitySeals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./resources/materialUITheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar backgroundSection="navbar" />
      <Header backgroundSection="header" />
      <Services backgroundSection="blue" />
      <QualitySeals backgroundSection="white" />
      <Contact backgroundSection="contact" />
      <Footer backgroundSection="footer" />
    </ThemeProvider>
  );
};

export default App;
