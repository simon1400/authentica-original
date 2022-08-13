import { useLazyQuery } from "@apollo/client"
import Chapter from "components/ChapterItem"
import PageHead from "components/PageHead"
import ShortItem from "components/ShortItem"
import TabsNav from "components/TabsNav"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"
import {
  cariersQuery, 
  cariersCategoryQuery, 
  cariersPageQuery, 
  cariersFilterQuery
} from "queries/cariers"
import { useState } from "react"
import { client } from "utility/graphql"

// @ts-ignore
export async function getServerSideProps({locale}) {
  const { data: pageData } = await client.query({
    query: cariersPageQuery,
    variables: {
      locale
    }
  });

  const vacancy = pageData.vacancyOverview.data.attributes

  const localizations = vacancy.localizations.data.map((item: any) => ({locale: item.attributes.locale}))
  localizations.push({locale})
  localizations.map((item: any) => item.slug = "/kariera")

  const { data: pageCategory } = await client.query({
    query: cariersCategoryQuery,
    variables: { locale }
  });
  
  const { data: posts } = await client.query({
    query: cariersQuery,
    variables: { locale }
  });

  return {
    props: {
      title: vacancy.title,
      content: vacancy.content,
      footer: vacancy.footer,
      label: vacancy.label,
      meta: vacancy.meta,
      posts: posts.vacancies.data,
      category: pageCategory.vacancyCategories.data,
      locale: locale,
      localizations
    },
  };
}

interface IPosts {
  title: string;
  content: string;
  label: string;
  meta: IMeta;
  posts: any[];
  category: any[];
  locale: string
}

const PositionCatalog: NextPage<IPosts> = ({
  title,
  content,
  label,
  meta,
  posts,
  category,
  locale
}) => {

  const [filterPosts, setFilterPosts] = useState(posts)

  const [getPosts] = useLazyQuery(cariersFilterQuery)

  const handleFilter = async (slug: string) => {
    if(slug === 'all') {
      setFilterPosts(posts)
    }else{
      const res = await getPosts({
        variables: {
          category: slug,
          locale
        }
      })
      setFilterPosts(res.data.vacancies.data)      
    }
  }


  return (
    <Page
    title={meta?.title}
    description={meta?.description}
    >
      <PageHead 
        head={title} 
        label={label} />

      <Chapter content={content} contentBig />

      <TabsNav data={category} handle={handleFilter} />

      <>
        {filterPosts.map((item, index) => 
          <ShortItem key={index} prefix="kariera" {...item.attributes} />)}
      </>

    </Page>
  )
}

export default PositionCatalog