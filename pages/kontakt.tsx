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

// @ts-ignore
export async function getServerSideProps({locale}) {
  const { data } = await client.query({
    query: contactQuery,
    variables: {
      locale
    }
  });

  const contact = data.contact.data.attributes

  const localizations = contact.localizations.data.map((item: any) => ({locale: item.attributes.locale}))
  localizations.push({locale})
  localizations.map((item: any) => item.slug = "/kontakt")

  return {
    props: {
      data: contact,
      footer: contact,
      localizations
    },
  };
}

const Contact: NextPage = ({
  // @ts-ignore
  data
}) => {  
  return (
    <Page
      title={data.meta?.title}
      description={data.meta?.description}
    >

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
          {data.adresses.map((item: any, index: number) => <Grid key={index} item xs={12} sm={4}>
            <ContactItem data={item} />
          </Grid>)}
        </Grid>}
      </Container>
    </Page>
  )
}

export default Contact