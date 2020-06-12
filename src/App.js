import React from "react";
import Services from "./components/Services";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./resources/materialUITheme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Services backgroundSection="blue" />
    </ThemeProvider>
  );
};

export default App;
