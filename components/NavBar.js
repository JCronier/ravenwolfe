import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import ServiceMenu from "./ServiceMenu";

import data from "../lib/data";

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function NavBar() {
  const serviceItems = data.serviceItems;

  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuOpen = Boolean(menuAnchor);

  const handleMenuClose = () => setMenuAnchor(null);
  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);

  return (
    <Container sx={{ height: "100px", display: "flex", alignItems: "center" }}>
      <AppBar position="relative" sx={{ bgcolor: "secondary.main" }}>
        <Grid container alignItems="center">
          <Grid item xs={4} display="flex">
            <Link href="/" passHref>
              <Typography sx={{cursor: 'pointer'}} variant="h4">Ravenwolfe</Typography>
            </Link>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <Link href="/" passHref>
              <Button>Home</Button>
            </Link>
            <Button id="services-button" onClick={handleMenuOpen}>
              Services
            </Button>
            <ServiceMenu
              serviceItems={serviceItems}
              anchorEl={menuAnchor}
              menuOpen={menuOpen}
              handleMenuClose={handleMenuClose}
            />
            <Link href="/about" passHref>
              <Button>About Us</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button>Contact Us</Button>
            </Link>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Link href="/payment" passHref>
              <Button variant="outlined">Pay Invoice</Button>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </Container>
  );
}

export default NavBar;
