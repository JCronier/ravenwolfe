/**
 * Footer component with navigational links and logo
 */

// Mui imports
import { Box, Container, Divider } from "@mui/material";

// Custom components
import FooterLinks from "./FooterLinks";
import Copyright from "./Copyright";

const pages = ["About Us", "Contact Us", 'Services'];

const Footer = () => {
  return (
    <Box>
      <FooterLinks footerLinks={pages} />
      <Divider />
      <Copyright />
    </Box>
  );
};

export default Footer;
