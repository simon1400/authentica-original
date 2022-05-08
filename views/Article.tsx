import ArticleBottom from "components/ArticleBottom"
import ChapterItem from "components/ChapterItem"
import Chapters from "components/Chapters"
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"

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

const ArticleFull: NextPage<IArticle> = ({
  data
}) => {
  return(
    <Page>
       <PageHead 
        head={data.title} 
        label={data.label} />

      <ChapterItem content={data.content} contentBig />

      <Chapters data={data.chapters} />

    </Page>
  )
}

export default ArticleFull