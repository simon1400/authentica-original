import Chapter from "components/Chapter"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"
import referenceQuery from "queries/reference";
import { client } from "utility/graphql";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: referenceQuery
  });

  return {
    props: {
      data: data.contact.data.attributes,
    },
  };
}

const ReferenceCategory: NextPage = () => {
  return (
    <Page>
      {/* <PageHead
        items={[
          'Shop in shop',
        ]} 
      />

      <Chapter content contentBig />
      <Chapter items smallReference />
      <Chapter head categoryItems />  */}
    </Page>
  )
}

export default ReferenceCategory