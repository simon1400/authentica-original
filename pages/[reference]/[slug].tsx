import Chapter from "components/Chapter"
import Numbers from "components/Numbers"
import PageHeadInside from "components/PageHeadInside"
import Page from "layout/Page"
import { NextPage } from "next"

const ReferenceFull: NextPage = () => {
  return(
    <Page>
      <PageHeadInside />
      <Chapter images={[
        '/assets/blogIn.jpeg',
      ]} />
      {/* <Chapter content images={[
        '/assets/blogIn.jpeg',
        '/assets/blogIn.jpeg',
        '/assets/blogIn.jpeg',
      ]} />

      <Chapter content />

      <Numbers />

      <Chapter content />

      <Chapter images={[
        '/assets/blogIn.jpeg',
        '/assets/blogIn.jpeg',
      ]} />

      <Chapter content /> */}

      <Chapter head items />
      
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: { 
      absoluteHeader: true
    }
  };
}

export default ReferenceFull