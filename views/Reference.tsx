import Chapters from "components/Chapters"
import PageHeadInside from "components/PageHeadInside"
import ReferenceItem from "components/ReferenceItem"
import ScrollingSection from "components/ScrolingSection"
import { ItemScroll } from "components/ScrolingSection/styled"
import { IFooter } from "interfaces/footer"
import { IImage } from "interfaces/image"
import { IMeta } from "interfaces/meta"
import Page from "layout/Page"
import { NextPage } from "next"
import {checkColor} from '../utility/checkColor'

interface IReferenceFull {
  Background: string;
  categories: any;
  chapters: [];
  content: string;
  footer: IFooter;
  image: IImage;
  label: string;
  materials: any;
  meta: IMeta;
  references: any;
  slug: string;
  technologies: any;
  title: string;
}

const ReferenceFull: NextPage<{data: IReferenceFull}> = ({
  data
}) => {

  const references = data.references.data.map((item: any) => item.attributes)
  
  return(
    <Page
      title={data.meta?.title}
      description={data.meta?.description}
    >
      <PageHeadInside
        label={data.label}
        title={data.title}
        background={data.Background}
        image={data.image.data.attributes.url}
        content={data.content}
        invert={checkColor(data.Background)}
        tags={{
          categories: data.categories.data,
          materials: data.materials.data,
          technologies: data.technologies.data
        }}
      />

      <Chapters data={data.chapters} />
      
      <>
        {!!references.length && <ScrollingSection column={references.length} height="110vh" widthColumn="560px">
          {references.map((item: any, index: number) => <ItemScroll key={index}>
            <ReferenceItem data={item} />
          </ItemScroll>)}
        </ScrollingSection>}
      </>    
    </Page>
  )
}

export default ReferenceFull