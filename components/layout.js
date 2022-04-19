import Head from "next/head";

import { Box } from "@mui/material";

import NavBar from "./NavBar";
import Footer from "./Footer";

const siteTitle = "Ravenwolfe";

export default function Layout(props) {
  const children = props.children;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Ravenwolfe Senior Consulting Services"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <NavBar />
      <Box component="main" sx={{ backgroundColor: "#e6dcc3" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
