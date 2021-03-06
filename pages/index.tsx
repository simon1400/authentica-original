import { Container } from '@mui/material'
import Page from 'layout/Page'
import type { NextPage } from 'next'
import Chapter from 'components/ChapterItem'
import BrandItem from 'components/BrandItem';
import PageHead from 'components/PageHead'
import ScrollingSection from 'components/ScrolingSection'
import homepageQuery from 'queries/homepage';
import { client } from 'utility/graphql';
import { ItemScroll } from 'components/ScrolingSection/styled';
import ReferenceItem from 'components/ReferenceItem';
import { useState } from 'react';
import VideoModal from 'components/VideoModal';
import HeadMarkdown from 'components/HeadMarkdown';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: homepageQuery
  });

  return {
    props: {
      data: data.homepage.data.attributes,
      footer: data.homepage.data.attributes.footer
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

  // @ts-ignore
  const references = data.references.data.map(item => item.attributes)
  
  return (
    <Page
      title={data.meta.title}
      description={data.meta.description}
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

      <>
        {!!references.length && <ScrollingSection column={references.length} height="90vh" widthColumn="560px">
          {/* @ts-ignore */}
          {references.map((item, index) => <ItemScroll key={index}>
            <ReferenceItem data={item} />
          </ItemScroll>)}
        </ScrollingSection>}
      </>

      <Chapter buttonVariant='contained' button={data.refCta} content={data.contentReference} contentBig />

      <>
        {!!data.partners && <Container>
          <HeadMarkdown marginBottom={12} title={data.titlePartners} />
        </Container>}

        {!!data.partners && <ScrollingSection column={data.partners.length} height="460px" widthColumn="400px">
          {/* @ts-ignore */}
          {data.partners.map((item, index) => <ItemScroll key={index}>
            <BrandItem data={item} index={index} />
          </ItemScroll>)}
        </ScrollingSection>}
      </>
      
    </Page>
  )
}

export default Home
