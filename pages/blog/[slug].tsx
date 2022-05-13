import ArticleBottom from "components/ArticleBottom"
import ChapterItem from "components/ChapterItem"
import Chapters from "components/Chapters"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"
import postQuery from "queries/post"
import { client } from "utility/graphql"

// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: postQuery,
    variables: {
      slug: ctx.query.slug
    }
  });

  return {
    props: {
      data: data.blogs.data[0].attributes,
      footer: data.blogs.data[0].attributes.footer
    },
  };
}

interface IArticleData {
  title: string;
  chapters: any[];
  label: string;
  content: string;
  textPublication: string | null;
}

interface IArticle {
  data: IArticleData
}

const Article: NextPage<IArticle> = ({
  data
}) => {
  return(
    <Page>
       <PageHead 
        head={data.title} 
        label={data.label} />

      <ChapterItem content={data.content} contentBig />

      <Chapters data={data.chapters} />

      <>{!!data.textPublication ? <ArticleBottom data={data.textPublication} /> : null}</>

    </Page>
  )
}

export default Article