/**
 * Footer navigation and links component
 * @param {props} footerLinks Takes an array of navigation link objects
 */

// Mui Imports
import { Container, Grid, Typography, Box } from "@mui/material";

import Image from "next/image";

// Custom components
import FooterList from "./FooterList";

const FooterLinks = (props) => {
  const footerLinks = props.footerLinks;

  // Maps an array of link objects to an array of link list components
  const linksList = footerLinks.map((list, index) => {
    return (
      <Grid key={index} item lg={2} md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center'}} >
        <FooterList item={list} />
      </Grid>
    );
  });

  return (
    <Box bgcolor="dark.main" paddingY={5}>
      {/* Container for footer nagivational links. Sets max width of component */}
      <Container>
        {/* Mui flexbox grid. Size props (xs, lg, etc.) indicate the number of columns
        the component will occupy at that screen size. The viewport width is 12 columns. 
        Grid components with container have display='flex' by default. */}
        <Grid container paddingTop="20px">
          <Grid
            item
            md={12}
            lg={3}
            xs={12}
            paddingTop="10px"
            paddingBottom="30px"
          >
            <Image
              src={"/inverted_ravenwolfe.png"}
              alt="Ravenwolfe"
              width="200px"
              height='200px'
            />
          </Grid>
          {linksList}
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterLinks;
