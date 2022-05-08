import Chapter from "components/ChapterItem"
import PageHead from "components/PageHead"
import ShortItem from "components/ShortItem"
import TabsNav from "components/TabsNav"
import { IFooter } from "interfaces/footer"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"
import postsQuery from "queries/posts"
import postsPageQuery from "queries/postsPage"
import { client } from "utility/graphql"

export async function getServerSideProps() {
  const { data: pageData } = await client.query({
    query: postsPageQuery,
  });
  
  
  const { data: posts } = await client.query({
    query: postsQuery,
  });

  return {
    props: {
      title: pageData.blogOverview.data.attributes.title,
      content: pageData.blogOverview.data.attributes.content,
      footer: pageData.blogOverview.data.attributes.footer,
      label: pageData.blogOverview.data.attributes.label,
      meta: pageData.blogOverview.data.attributes.meta,
      posts: posts.blogs.data
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

const Posts: NextPage<IPosts> = ({
  title,
  content,
  label,
  footer,
  meta,
  posts
}) => {

  console.log(posts);
  
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

export default Posts