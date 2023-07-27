import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import variables from "./styles/variables";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}
