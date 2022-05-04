import { Container, Grid } from '@mui/material'
import Page from 'layout/Page'
import type { NextPage } from 'next'
import Chapter from 'components/Chapter'
import { Head } from 'styles/Head';
import BrandItem from 'components/BrandItem';
import PageHead from 'components/PageHead'
import ScrollingSection from 'components/ScrolingSection'
import homepageQuery from 'queries/homepage';
import { client } from 'utility/graphql';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: homepageQuery
  });

  return {
    props: {
      data: data.homepage.data.attributes,
    },
 };
}


const Home: NextPage = ({
  // @ts-ignore
  data
}) => {

  console.log(data);
  
  return (
    <Page>

      <PageHead 
        label={data.label}
        head={data.titles} 
        buttons
      />

      <Chapter buttonVariant='text' button={data.cta} content={data.content} contentBig />

      <ScrollingSection />

      <Chapter buttonVariant='contained' button={data.refCta} content={data.contentReference} contentBig />

      <Container>
        <Head variant="h2">{data.titlePartners}</Head>
        {!!data.partners.length && <Grid container spacing={6} marginBottom={26}>
          {/* @ts-ignore */}
          {data.partners.map((item, index) => <Grid key={index} item xs={4}>
            <BrandItem index={index} />
          </Grid>)}
        </Grid>}
      </Container>
    </Page>
  )
}

export default Home
