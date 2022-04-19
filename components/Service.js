import { Container, Grid, Typography } from "@mui/material";

function Service(props) {
  const serviceItem = props.serviceItem;
  const sx = props.sx;
  const id = serviceItem.title.toLowerCase().split(" ").join("");

  return (
    <Container sx={sx} id={id}>
      <Grid container>
        <Grid item md={3} xs={12}>
          <Typography variant="h5">{serviceItem.title}</Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Typography sx={{ fontSize: "18px" }}>
            {serviceItem.details}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Service;
