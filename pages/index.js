import {
  Container,
  Divider,
  Grid,
  Stack,
  Paper,
  Typography,
} from "@mui/material";
import Service from "../components/Service";
import Banner from "../components/Banner";

import data from "../lib/data";

export async function getStaticProps() {
  const serviceItems = data.serviceItems;

  return {
    props: {
      serviceItems,
    },
  };
}

export default function Home(props) {
  const serviceItems = props.serviceItems;

  const serviceItemsList = serviceItems.map((item) => {
    return (
      <Container key={item.title}>
        <Paper sx={{ padding: "100px", margin: "20px" }}>
          <Service serviceItem={item} />
        </Paper>
      </Container>
    );
  });

  return (
    <Stack divider={<Divider />}>
      <Banner />
      <Container>
          <Typography id='services' variant="h3" align='center' color='secondary'>Services we offer...</Typography>
      </Container>
      {serviceItemsList}
    </Stack>
  );
}
