import ArticleBottom from "components/ArticleBottom"
import ChapterItem from "components/ChapterItem"
import Chapters from "components/Chapters"
import PageHead from "components/PageHead"
import { IMeta } from "interfaces/meta"
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

  if(!data?.blogs?.data?.[0]?.attributes) {
    return {
      notFound: true
    }
  }
  

  return {
    props: {
      data: data.blogs.data[0]?.attributes,
      footer: data.blogs.data[0]?.attributes.footer
    },
  };
}

interface IArticleData {
  title: string;
  chapters: any[];
  label: string;
  content: string;
  textPublication: string | null;
  meta: IMeta;
}

interface IArticle {
  data: IArticleData
}

const Article: NextPage<IArticle> = ({
  data
}) => {
  return(
    <Page
      title={data.meta?.title}
      description={data.meta?.description}
    >
       <PageHead 
        head={data.title} 
        label={data.label} />

      <ChapterItem content={data.content} contentBig />

      <Chapters data={data.chapters} />

      <>{!!data.textPublication 
          ? <ArticleBottom share={{
              title: data.title
            }}
            data={data.textPublication} 
          />
          : null}</>

    </Page>
  )
}

export default Article