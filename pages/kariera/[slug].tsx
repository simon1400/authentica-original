import Chapter from "components/ChapterItem"
import Chapters from "components/Chapters";
import PageHead from "components/PageHead"
import { IMeta } from "interfaces/meta";
import Page from "layout/Page"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {carierQuery} from "queries/cariers";
import { client } from "utility/graphql";

// @ts-ignore
export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: carierQuery,
    variables: {
      slug: ctx.query.slug,
      locale: ctx.locale
    }
  });

  if(!data?.vacancies?.data?.[0]?.attributes) {
    return {
      notFound: true
    }
  }

  const vacancy = data.vacancies.data[0].attributes
  const localizations = [
    {slug: '/kariera/'+ctx.query.slug, locale: ctx.locale}
  ];
  vacancy.localizations.data.map((item: any) => localizations.push({slug: '/kariera/'+item.attributes.slug, locale: item.attributes.locale}))

  return {
    props: {
      data: vacancy,
      footer: vacancy.footer,
      localizations,
      ...(await serverSideTranslations(ctx.locale, ['common'])),
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