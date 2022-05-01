import { Container, Divider, Grid } from "@mui/material";
import Chapter from "components/Chapter";
import ContactItem from "components/ContactItem";
import ContactLine from "components/ContactLine";
import Map from "components/Map";
import PageHead from "components/PageHead";
import Page from "layout/Page";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <Page>
      <PageHead items={[
        'Spojte se s námi!'
      ]} />
      <Chapter content contentBig />
      <ContactLine />
      {/* <Map /> */}
      <Container>
        <Grid container marginBottom={8} justifyContent="center">
          <Grid item xs={6}>
            <ContactItem level="h3" />
          </Grid>
        </Grid>
        <Divider />
        <Grid container marginTop={12} justifyContent="center">
          <Grid item xs={6}>
            <ContactItem />
          </Grid>
          <Grid item xs={6}>
            <ContactItem />
          </Grid>
          <Grid item xs={6}>
            <ContactItem />
          </Grid>
          <Grid item xs={6}>
            <ContactItem />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Contact