import { useLazyQuery } from "@apollo/client"
import Chapter from "components/ChapterItem"
import PageHead from "components/PageHead"
import ShortItem from "components/ShortItem"
import TabsNav from "components/TabsNav"
import { IFooter } from "interfaces/footer"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"
import {
  postsQuery, 
  postsCategoryQuery, 
  postsPageQuery,
  postsFilterQuery
} from "queries/posts"
import { useState } from "react"
import { client } from "utility/graphql"

// @ts-ignore
export async function getServerSideProps({locale}) {
  const { data: pageData } = await client.query({
    query: postsPageQuery,
    variables: { locale }
  });
  
  const { data: pageCategory } = await client.query({
    query: postsCategoryQuery,
    variables: { locale }
  });
  
  
  const { data: posts } = await client.query({
    query: postsQuery,
    variables: { locale }
  });

  return {
    props: {
      title: pageData.blogOverview.data.attributes.title,
      content: pageData.blogOverview.data.attributes.content,
      footer: pageData.blogOverview.data.attributes.footer,
      label: pageData.blogOverview.data.attributes.label,
      meta: pageData.blogOverview.data.attributes.meta,
      posts: posts.blogs.data,
      category: pageCategory.blogCategories.data,
      locale: locale
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
  category: any[];
  locale: string;
}

const Posts: NextPage<IPosts> = ({
  title,
  content,
  label,
  meta,
  posts,
  category,
  locale
}) => {

  const [filterPosts, setFilterPosts] = useState(posts)

  const [getPosts] = useLazyQuery(postsFilterQuery)

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
      setFilterPosts(res.data.blogs.data)      
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
          <ShortItem key={index} prefix="blog" {...item.attributes} />)}
      </>

    </Page>
  )
}

export default Posts