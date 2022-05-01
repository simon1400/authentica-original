import { Container, Grid } from '@mui/material'
import Page from 'layout/Page'
import type { NextPage } from 'next'
import Chapter from 'components/Chapter'
import { Head } from 'styles/Head';
import BrandItem from 'components/BrandItem';
import PageHead from 'components/PageHead'
import ScrollingSection from 'components/ScrolingSection'
// import { AxiosAPI } from 'restClient';
// import { homepageQuery } from 'queries/homepage';

// export async function getServerSideProps() {

//   const resData = await AxiosAPI.get(`/homepage?${homepageQuery}`)

//   return {
//     props: {
//       data: resData.data.data.attributes
//     }
//   }
// }


const Home: NextPage = ({
  // @ts-ignore
  // data
}) => {
  
  return (
    <Page>

      <PageHead 
        items={[
          'In Store Design',
          'POS média',
          'Design výloh',
          'Interiérové dekorace'
        ]} 
        buttons
      />

      <Chapter buttonVariant='text' content contentBig />

      <ScrollingSection />

      <Chapter buttonVariant='contained' content contentBig />

      <Container>
        <Head variant="h2">Přidejte se k těm nejlepším</Head>
        <Grid container spacing={6} marginBottom={26}>
          <Grid item xs={4}>
            <BrandItem index={0} />
          </Grid>
          <Grid item xs={4}>
            <BrandItem index={1} />
          </Grid>
          <Grid item xs={4}>
            <BrandItem index={2} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Home
