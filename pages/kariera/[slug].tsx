import Chapter from "components/ChapterItem"
import Chapters from "components/Chapters";
import PageHead from "components/PageHead"
import Page from "layout/Page"
import { NextPage } from "next"
import carierQuery from "queries/carier";
import { client } from "utility/graphql";

// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: carierQuery,
    variables: {
      slug: ctx.query.slug
    }
  });

  return {
    props: {
      data: data.vacancies.data[0].attributes,
      footer: data.vacancies.data[0].attributes.footer
    },
  };
}

interface ICarierData {
  title: string;
  chapters: any[];
  label: string;
  content: string;
  textPublication: string | null;
}

interface ICarier {
  data: ICarierData
}

const PositionFull: NextPage<ICarier> = ({
  data
}) => {
  return(
    <Page>
      <PageHead 
        head={data.title} 
        label={data.label} />

      <Chapter content={data.content} contentBig />

      <Chapters data={data.chapters} />

    </Page>
  )
}

export default PositionFull