import Chapter from "components/ChapterItem"
import PageHead from "components/PageHead"
import ShortItem from "components/ShortItem"
import TabsNav from "components/TabsNav"
import { IFooter } from "interfaces/footer"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"
import cariersQuery from "queries/cariers"
import cariersPageQuery from "queries/cariersPage"
import { client } from "utility/graphql"

export async function getServerSideProps() {
  const { data: pageData } = await client.query({
    query: cariersPageQuery,
  });
  
  const { data: posts } = await client.query({
    query: cariersQuery,
  });

  return {
    props: {
      title: pageData.vacancyOverview.data.attributes.title,
      content: pageData.vacancyOverview.data.attributes.content,
      footer: pageData.vacancyOverview.data.attributes.footer,
      label: pageData.vacancyOverview.data.attributes.label,
      meta: pageData.vacancyOverview.data.attributes.meta,
      posts: posts.vacancies.data
    },
  };
}

interface IPosts {
  title: string;
  content: string;
  footer: IFooter;
  label: string;
  meta: IMeta;
  posts: any[];
}

const PositionCatalog: NextPage<IPosts> = ({
  title,
  content,
  label,
  footer,
  meta,
  posts
}) => {
  return (
    <Page>
      <PageHead 
        head={title} 
        label={label} />

      <Chapter content={content} contentBig />

      <TabsNav />

      <>{posts.map((item, index) => <ShortItem key={index} {...item.attributes} />)}</>

    </Page>
  )
}

export default PositionCatalog