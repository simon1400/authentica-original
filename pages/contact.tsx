import { Container, Divider, Grid } from "@mui/material";
import Chapter from "components/ChapterItem";
import ContactItem from "components/ContactItem";
import ContactLine from "components/ContactLine";
import Map from "components/Map";
import PageHead from "components/PageHead";
import Page from "layout/Page";
import { NextPage } from "next";
import contactQuery from "queries/contact";
import { client } from "utility/graphql";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: contactQuery
  });

  return {
    props: {
      data: data.contact.data.attributes,
    },
  };
}

const Contact: NextPage = ({
  // @ts-ignore
  data
}) => {
  return (
    <Page>

      <PageHead label={data.label} head={data.title} />

      <Chapter content={data.content} contentBig />

      <ContactLine data={data.contactItem} />

      <Map />

      <Container>
        <Grid container marginBottom={8} justifyContent="center">
          <Grid item xs={6}>
            <ContactItem data={data.headquarters} level="h3" />
          </Grid>
        </Grid>
        {!!data.adresses.length && <Divider />}
        {!!data.adresses.length && <Grid container marginTop={12} justifyContent="center">
          {/* @ts-ignore */}
          {data.adresses.map((item, index) => <Grid key={index} item xs={6}>
            <ContactItem data={item} />
          </Grid>)}
        </Grid>}
      </Container>
    </Page>
  )
}

export default Contact