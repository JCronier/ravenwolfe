import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  Grid,
  Link,
} from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        height: "90vh",
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Stack spacing={10}>
          <Typography variant="h2" color="secondary">
            Welcome to Ravenwolfe Senior Consulting Services
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            blandit diam et risus varius, quis feugiat enim pellentesque.
            Pellentesque a enim eget ipsum iaculis imperdiet ut ac mi.
            Suspendisse nec nibh id diam mollis luctus a dapibus lacus. Nulla
            malesuada fermentum euismod. Etiam eu felis sit amet ante blandit
            fermentum. Nullam a velit et quam pretium volutpat. Nam tempus
            ligula eget risus scelerisque sollicitudin. Praesent sed nisl
            mattis, suscipit enim quis, consequat est. Maecenas non dapibus
            nunc, sit amet cursus est. Aenean finibus tellus elit, non congue
            ante tempor ut. Nunc eu ultricies ex, ac fringilla arcu. Class
            aptent taciti.
          </Typography>
          <Grid container justifyContent="center">
            <Link href="/contact" passHref>
              <Button variant="outlined" color="secondary">
                Get Started
              </Button>
            </Link>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Banner;
