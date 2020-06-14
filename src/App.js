import React from "react";
import Services from "./components/Services";
import QualitySeals from "./components/QualitySeals";
import Footer from "./components/Footer";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./resources/materialUITheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Services backgroundSection="blue" />
      <QualitySeals backgroundSection="white" />
      <Footer backgroundSection="footer" />
    </ThemeProvider>
  );
};

export default App;
