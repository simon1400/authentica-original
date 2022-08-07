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

export async function getServerSideProps() {
  const { data: pageData } = await client.query({
    query: cariersPageQuery,
  });

  const { data: pageCategory } = await client.query({
    query: cariersCategoryQuery,
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
      posts: posts.vacancies.data,
      category: pageCategory.vacancyCategories.data
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
}

const PositionCatalog: NextPage<IPosts> = ({
  title,
  content,
  label,
  meta,
  posts,
  category
}) => {

  const [filterPosts, setFilterPosts] = useState(posts)

  const [getPosts] = useLazyQuery(cariersFilterQuery)

  const handleFilter = async (slug: string) => {
    if(slug === 'all') {
      setFilterPosts(posts)
    }else{
      const res = await getPosts({
        variables: {
          category: slug
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