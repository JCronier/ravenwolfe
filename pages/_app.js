import "../styles/globals.css";

import Layout from "../components/layout";

import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "../styles/theme";
import { CssBaseline } from "@mui/material";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
