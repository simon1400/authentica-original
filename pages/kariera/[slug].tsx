import Chapter from "components/ChapterItem"
import Chapters from "components/Chapters";
import PageHead from "components/PageHead"
import { IMeta } from "interfaces/meta";
import Page from "layout/Page"
import { NextPage } from "next"
import {carierQuery} from "queries/cariers";
import { client } from "utility/graphql";


// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: carierQuery,
    variables: {
      slug: ctx.query.slug
    }
  });

  if(!data?.vacancies?.data?.[0]?.attributes) {
    return {
      notFound: true
    }
  }

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
  meta: IMeta;
}

interface ICarier {
  data: ICarierData
}

const PositionFull: NextPage<ICarier> = ({
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

      <Chapter content={data.content} contentBig />

      <Chapters data={data.chapters} />

    </Page>
  )
}

export default PositionFull