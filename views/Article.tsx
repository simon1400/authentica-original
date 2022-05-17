import ChapterItem from "components/ChapterItem"
import Chapters from "components/Chapters"
import PageHead from "components/PageHead"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"

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

const ArticleFull: NextPage<IArticle> = ({
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

    </Page>
  )
}

export default ArticleFull