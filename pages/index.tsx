import { Container, useMediaQuery } from '@mui/material'
import Page from 'layout/Page'
import type { NextPage } from 'next'
import Chapter from 'components/ChapterItem'
import BrandItem from 'components/BrandItem';
import PageHead from 'components/PageHead'
import homepageQuery from 'queries/homepage';
import { client } from 'utility/graphql';
import ReferenceItem from 'components/ReferenceItem';
import { useState } from 'react';
import VideoModal from 'components/VideoModal';
import HeadMarkdown from 'components/HeadMarkdown';
import SectionSlider from 'components/Slider';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// @ts-ignore
export async function getServerSideProps({locale}) {

  const { data } = await client.query({
    query: homepageQuery,
    variables: {
      locale
    }
  });

  const homepage = data.homepage.data.attributes

  return {
    props: {
      data: homepage,
      footer: homepage.footer
    },
  };
  
}


const Home: NextPage = ({
  // @ts-ignore
  data
}) => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mediaXs = useMediaQuery("(max-width: 960px)")

  const references = data.references.data.map((item: any) => item.attributes)
  
  return (
    <Page
      title={data.meta?.title}
      description={data.meta?.description}
    >

      <PageHead
        label={data.label}
        head={data.titles}
        openModal={handleOpen}
        buttons={data.topButton}
      />

      <VideoModal
        data={data.video.data.attributes.url}
        open={open}
        handleClose={handleClose}
      />

      <Chapter button={data.cta} content={data.content} contentBig />

      <SectionSlider count={references.length}>
        {references.map((item: any, index: number) => <div style={{width: mediaXs ? '100vw' : "30vw", height: "800px"}} key={index}>
          <ReferenceItem data={item} />
        </div>)}
      </SectionSlider>

      <Chapter buttonVariant='contained' button={data.refCta} content={data.contentReference} contentBig />

      <>
        {!!data.partners && <Container>
          <HeadMarkdown marginBottom={12} title={data.titlePartners} />
        </Container>}

        <SectionSlider infinite>
          {!!data.partners && data.partners.map((item: any, index: number) => <div key={index}>
            <BrandItem data={item} index={index} />
          </div>
          )}
        </SectionSlider>
      </>
      
    </Page>
  )
}

export default Home
