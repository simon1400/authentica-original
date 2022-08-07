import { NextPage } from "next"
import articleQuery from "queries/article";
import referenceQuery from "queries/reference";
import { client } from "utility/graphql";
import ArticleFull from "views/Article";
import ReferenceFull from "views/Reference";

// @ts-ignore
export async function getServerSideProps(ctx) {

  const lnArticleSlug = ctx.query.article.length

  const { data: articleData } = await client.query({
    query: articleQuery,
    variables: {
      slug: ctx.query.article[lnArticleSlug - 1],
      locale: ctx.locale
    }
  });

  if(articleData.techArticles.data.length) {
    return {
      props: {
        data: articleData.techArticles.data[0].attributes,
        footer: articleData.techArticles.data[0].attributes.footer
      }
    }
  }

  const { data: referenceData } = await client.query({
    query: referenceQuery,
    variables: {
      slug: ctx.query.article[lnArticleSlug - 1],
      locale: ctx.locale
    }
  });

  if(referenceData.references.data.length) {
    const background = referenceData.references.data[0].attributes.Background
    return {
      props: {
        data: referenceData.references.data[0].attributes,
        bgHeaderAbsolute: background,
        footer: referenceData.references.data[0].attributes.footer
      }
    }
  }else{
    return {
      notFound: true
    }
  }
}

interface IArticleRoot{
  data: any;
}

const ArticleRoot: NextPage<IArticleRoot> = ({
  data
}) => {
  
  if(data.__typename === "Reference") {
    return <ReferenceFull data={data} />
  }else if(data.__typename === "TechArticle"){
    return <ArticleFull data={data} />
  }

  return null
}

export default ArticleRoot