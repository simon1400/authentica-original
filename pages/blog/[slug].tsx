import ArticleBottom from "components/ArticleBottom"
import Chapter from "components/Chapter"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"

const Article: NextPage = () => {
  return(
    <Page>
      <PageHead items={[
        'People & Culture Manager'
      ]} />

      <Chapter content contentBig images={[
        '/assets/blogIn.jpeg',
      ]} />
      <Chapter head content images={[
        '/assets/blogIn.jpeg',
        '/assets/blogIn.jpeg',
        '/assets/blogIn.jpeg',
      ]} />
      <Chapter content />
      <Chapter content />
      <Chapter head items smallReference />
      <Chapter content />
      <Chapter content />

      <ArticleBottom />

    </Page>
  )
}

export default Article