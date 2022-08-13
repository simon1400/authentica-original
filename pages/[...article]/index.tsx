import { NextPage } from "next"
import articleQuery from "queries/article";
import referenceQuery from "queries/reference";
import { client } from "utility/graphql";
import ArticleFull from "views/Article";
import ReferenceFull from "views/Reference";

// @ts-ignore
export async function getServerSideProps(ctx) {

  const lnArticleSlug = ctx.query.article.length

  let localizations = [
    {slug: '/'+ctx.query.article[lnArticleSlug - 1], locale: ctx.locale}
  ]

  const { data: articleData } = await client.query({
    query: articleQuery,
    variables: {
      slug: ctx.query.article[lnArticleSlug - 1],
      locale: ctx.locale
    }
  });

  if(articleData.techArticles.data.length) {
    const article = articleData.techArticles.data[0].attributes
    article.localizations.data.map((item: any) => localizations.push({slug: '/'+item.attributes.slug, locale: item.attributes.locale}))

    return {
      props: {
        data: article,
        footer: article.footer,
        localizations
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
    const reference = referenceData.references.data[0].attributes
    const background = reference.Background
    
    reference.localizations.data.map((item: any) => localizations.push({slug: '/'+item.attributes.slug, locale: item.attributes.locale}))

    return {
      props: {
        data: reference,
        bgHeaderAbsolute: background,
        footer: reference.footer,
        localizations
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