import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { theme } from "../../constants/theme";
import { store } from "../../store";

export const AppProviders: FC = ({ children }) => {
  return (
    <Router>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StoreProvider>
    </Router>
  );
};
