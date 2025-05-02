import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import MainLayout from "./components/layout/MainLayout";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
